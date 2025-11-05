import * as vscode from 'vscode';
import * as path from 'path';
import { spawn } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    console.log('Odoo Scaffold extension is now active');

    let disposable = vscode.commands.registerCommand(
        'odoo-scaffold.scaffoldModule',
        async (uri: vscode.Uri) => {
            try {
                // Get target folder path
                const targetPath = uri.fsPath;

                // Get module name from user
                const moduleName = await vscode.window.showInputBox({
                    prompt: 'Masukkan nama module Odoo',
                    placeHolder: 'contoh: my_module',
                    validateInput: (value: string) => {
                        if (!value) {
                            return 'Nama module tidak boleh kosong';
                        }
                        // Validate module name (lowercase, underscore, alphanumeric)
                        if (!/^[a-z][a-z0-9_]*$/.test(value)) {
                            return 'Nama module harus lowercase, dimulai dengan huruf, dan hanya mengandung huruf, angka, dan underscore';
                        }
                        return null;
                    }
                });

                if (!moduleName) {
                    return; // User cancelled
                }

                // Get configuration
                const config = vscode.workspace.getConfiguration('odooScaffold');
                const odooBinPath = config.get<string>('odooBinPath');
                const pythonPath = config.get<string>('pythonPath', 'python3');

                if (!odooBinPath) {
                    const configure = await vscode.window.showErrorMessage(
                        'Path odoo-bin belum dikonfigurasi!',
                        'Buka Settings'
                    );
                    
                    if (configure === 'Buka Settings') {
                        vscode.commands.executeCommand(
                            'workbench.action.openSettings',
                            'odooScaffold.odooBinPath'
                        );
                    }
                    return;
                }

                // Show progress
                await vscode.window.withProgress({
                    location: vscode.ProgressLocation.Notification,
                    title: `Membuat module '${moduleName}'...`,
                    cancellable: false
                }, async (progress) => {
                    return new Promise<void>((resolve, reject) => {
                        // Prepare command
                        const args = [odooBinPath, 'scaffold', moduleName, targetPath];
                        
                        // Execute scaffold command
                        const process = spawn(pythonPath, args, {
                            cwd: path.dirname(odooBinPath)
                        });

                        let stdout = '';
                        let stderr = '';

                        process.stdout.on('data', (data) => {
                            stdout += data.toString();
                        });

                        process.stderr.on('data', (data) => {
                            stderr += data.toString();
                        });

                        process.on('close', (code) => {
                            if (code === 0) {
                                vscode.window.showInformationMessage(
                                    `✅ Module '${moduleName}' berhasil dibuat di ${targetPath}`
                                );
                                resolve();
                            } else {
                                vscode.window.showErrorMessage(
                                    `❌ Gagal membuat module: ${stderr || stdout || 'Unknown error'}`
                                );
                                reject(new Error(stderr || stdout));
                            }
                        });

                        process.on('error', (err) => {
                            vscode.window.showErrorMessage(
                                `❌ Error: ${err.message}\n\nPastikan path odoo-bin dan python sudah benar di settings.`
                            );
                            reject(err);
                        });
                    });
                });

            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                vscode.window.showErrorMessage(`Error: ${errorMessage}`);
            }
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log('Odoo Scaffold extension is now deactivated');
}

