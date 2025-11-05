# Odoo Scaffold Extension

Extension untuk Cursor/VS Code yang memudahkan pembuatan module Odoo baru melalui context menu.

## Fitur

- ✨ Scaffold module Odoo langsung dari context menu folder
- ⚙️ Konfigurasi path odoo-bin yang fleksibel
- ✅ Validasi nama module otomatis
- 📝 Progress indicator saat membuat module

## Cara Install

### Install dari Source

1. Clone atau copy folder extension ini
2. Buka terminal di folder extension
3. Install dependencies:
   ```bash
   npm install
   ```
4. Compile extension:
   ```bash
   npm run compile
   ```
5. Tekan `F5` untuk menjalankan extension di Development Mode, atau:
6. Package extension:
   ```bash
   npx vsce package
   ```
7. Install file `.vsix` yang dihasilkan:
   - Buka Cursor/VS Code
   - Go to Extensions (Cmd+Shift+X)
   - Click ... (More Actions) > Install from VSIX
   - Pilih file `.vsix`

## Konfigurasi

Sebelum menggunakan extension, Anda perlu mengkonfigurasi path ke `odoo-bin`:

1. Buka Settings (`Cmd+,` atau `Ctrl+,`)
2. Cari "Odoo Scaffold"
3. Set `Odoo Scaffold: Odoo Bin Path` dengan path lengkap ke odoo-bin Anda
   - Contoh: `/Users/lyon/odoo/base/odoo18/odoo-bin`
   - Atau: `/opt/odoo/odoo-bin`

### Konfigurasi Tersedia

- **Odoo Bin Path**: Path lengkap ke file odoo-bin executable
- **Python Path**: Path ke Python interpreter (default: `python3`)

## Cara Penggunaan

1. Buka folder workspace Odoo Anda di Cursor/VS Code
2. Klik kanan pada folder tempat Anda ingin membuat module
3. Pilih **"Scaffold Odoo Module"** dari context menu
4. Masukkan nama module (harus lowercase, dimulai dengan huruf, hanya huruf/angka/underscore)
5. Extension akan otomatis menjalankan `odoo scaffold` dan membuat module baru

## Contoh

Misalnya Anda ingin membuat module `custom_sales`:

1. Klik kanan pada folder `/addons`
2. Pilih "Scaffold Odoo Module"
3. Ketik: `custom_sales`
4. Module akan dibuat di `/addons/custom_sales/`

Struktur yang dihasilkan:
```
custom_sales/
├── __init__.py
├── __manifest__.py
├── controllers/
├── models/
├── views/
└── security/
```

## Troubleshooting

### "Path odoo-bin belum dikonfigurasi"
- Pastikan Anda sudah set `Odoo Scaffold: Odoo Bin Path` di Settings

### "Error: spawn python3 ENOENT"
- Pastikan Python terinstall dan bisa diakses dari command line
- Atau set `Odoo Scaffold: Python Path` ke path Python yang benar

### "Gagal membuat module"
- Periksa apakah path odoo-bin benar
- Pastikan Anda memiliki permission write di folder target
- Pastikan nama module valid (lowercase, huruf/angka/underscore)

## Development

```bash
# Install dependencies
npm install

# Compile
npm run compile

# Watch mode (auto compile on save)
npm run watch

# Run extension in development
# Tekan F5 di VS Code
```

## Requirements

- VS Code / Cursor >= 1.80.0
- Node.js >= 16.0.0
- Python 3
- Odoo installation

## Changelog

### 1.0.0
- Initial release
- Scaffold Odoo module dari context menu
- Konfigurasi odoo-bin path

## Author

**Aghyksa** - Odoo Developer

- LinkedIn: [https://www.linkedin.com/in/lion-younes](https://www.linkedin.com/in/lion-younes)

## License

MIT

