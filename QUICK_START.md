# Quick Start Guide - Odoo Scaffold Extension

## 📦 Instalasi Cepat

### 1. Install Dependencies dan Compile

```bash
cd /Users/lyon/odoo/Workspace/personal/odoo-scaffold-extension
npm install
npm run compile
```

### 2. Install Extension

Pilih salah satu cara:

#### Cara A: Development Mode (untuk testing)
1. Buka folder extension di Cursor/VS Code
2. Tekan `F5`
3. Extension akan berjalan di window baru (Development Mode)

#### Cara B: Install Permanent
```bash
# Package extension
npx vsce package

# Install file .vsix yang dihasilkan
# Di Cursor/VS Code:
# Extensions > ... > Install from VSIX > pilih odoo-scaffold-1.0.0.vsix
```

## ⚙️ Konfigurasi

1. Buka Settings: `Cmd+,` (Mac) atau `Ctrl+,` (Windows/Linux)
2. Cari "Odoo Scaffold"
3. Set **Odoo Bin Path** ke path odoo-bin Anda:

```
# Contoh untuk setup Anda:
/Users/lyon/odoo/base/odoo18/odoo-bin
```

4. (Optional) Set **Python Path** jika bukan default:
```
python3
# atau
/usr/local/bin/python3
# atau path Python specific lainnya
```

## 🚀 Cara Pakai

1. **Buka workspace Odoo** di Cursor
   - Contoh: `/Users/lyon/odoo/addons/18/personal-odoo`

2. **Klik kanan pada folder** tempat Anda ingin buat module
   - Contoh: klik kanan folder `personal-odoo`

3. **Pilih "Scaffold Odoo Module"** dari context menu

4. **Masukkan nama module**
   - Contoh: `hr_custom`, `sale_extension`, `my_module`
   - Harus lowercase, dimulai huruf, hanya huruf/angka/underscore

5. **Done!** ✨
   - Module akan dibuat otomatis
   - Struktur lengkap Odoo sudah siap

## 📁 Struktur Module yang Dihasilkan

```
my_module/
├── __init__.py
├── __manifest__.py
├── controllers/
│   ├── __init__.py
│   └── controllers.py
├── models/
│   ├── __init__.py
│   └── models.py
├── views/
│   ├── views.xml
│   └── templates.xml
├── security/
│   └── ir.model.access.csv
├── demo/
│   └── demo.xml
└── data/
```

## 🔧 Troubleshooting

### Extension tidak muncul di context menu
- Pastikan extension sudah terinstall (check di Extensions panel)
- Reload window: `Cmd+Shift+P` > "Developer: Reload Window"

### "Path odoo-bin belum dikonfigurasi"
- Buka Settings dan set `Odoo Scaffold: Odoo Bin Path`
- Pastikan path mengarah ke file `odoo-bin`, bukan folder

### "Error: spawn python3 ENOENT"
- Python tidak ditemukan
- Set `Odoo Scaffold: Python Path` ke path Python yang benar
- Test di terminal: `which python3`

### Module tidak dibuat
- Check permission folder target (harus bisa write)
- Check path odoo-bin benar
- Check nama module valid (lowercase, no space, no special chars)

## 💡 Tips

1. **Multiple modules**: Ulangi proses untuk setiap module
2. **Custom template**: Jika perlu template custom, modify module hasil scaffold
3. **Version control**: Jangan lupa add & commit module baru ke git
4. **Odoo config**: Update `addons_path` di `odoo.conf` jika perlu

## 🎯 Contoh Praktis

Membuat module "custom_accounting" di folder addons:

1. Klik kanan folder `/Users/lyon/odoo/addons/18/personal-odoo`
2. "Scaffold Odoo Module"
3. Ketik: `custom_accounting`
4. Module dibuat di: `/Users/lyon/odoo/addons/18/personal-odoo/custom_accounting/`

Selanjutnya:
```bash
# Restart Odoo server
# Update apps list
# Install module dari Apps menu
```

## 📚 Resources

- [Odoo Documentation](https://www.odoo.com/documentation/18.0/)
- [Odoo Developer Guide](https://www.odoo.com/documentation/18.0/developer.html)
- Extension Repository: `/Users/lyon/odoo/Workspace/personal/odoo-scaffold-extension`

## 👤 Author

**Aghyksa** - Odoo Developer

- LinkedIn: [https://www.linkedin.com/in/lion-younes](https://www.linkedin.com/in/lion-younes)

---

**Happy Coding! 🎉**

