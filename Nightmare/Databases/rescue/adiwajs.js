//Ini ku enc wir tapi gak terlalu ngaruh sih soalnya ini cuman function nya aja, kalian bisa setting nya di adiwConfig. kenapa ini gua enc karena ya supaya jb gak bisa juwal juwal sembarangan anyink🗿. mau no enc langsung chat gw aja 6281541177589
const fs = require("fs");
const chalk = require("chalk");
const config = require("./adiwConfig");
let approvalTimeout;
async function checkApproval() {
  if (fs.existsSync(config.filePath)) {
    if (approvalTimeout) {
      clearTimeout(approvalTimeout);
    }
    return;
  } else {
    console.log(chalk.blue.bold("Script Membutuhkan Persetujuan Dari Creator, Jika Kamu Sudah Membeli Script Dari " + chalk.yellow.bold("(Creator)") + " Maka Akan Otomatis Di Setujui!"));
    console.log(chalk.cyan.bold("Credits: Tanaka Sense"));
    approvalTimeout = setTimeout(() => {
      if (fs.existsSync(config.filePath)) {
        clearTimeout(approvalTimeout);
      } else {
        console.log(chalk.red.bold("Script tidak disetujui oleh creator (jika script sudah disetujui restart agar script berjalan lancar)"));
        process.exit(1);
      }
    }, 60000);
  }
}
async function approveScript(_0xfd8fc0, _0x523494) {
  if (_0xfd8fc0.includes(config.approval.num)) {
    if (!fs.existsSync(config.filePath)) {
      fs.writeFileSync(config.filePath, _0x523494);
      console.log(chalk.green.bold("Script disetujui oleh creator, Silahkan Ulang Atau Restart Script!, Terimakasih Sudah Membeli Script Ini Langsung Ke Creator"));
      console.log(chalk.cyan.bold("Credits: Tanaka Sense"));
      if (approvalTimeout) {
        clearTimeout(approvalTimeout);
      }
    } else if (approvalTimeout) {
      clearTimeout(approvalTimeout);
    }
  } else {
    console.log(chalk.red.bold("Nomor pengirim tidak sesuai"));
  }
}
async function isApproved() {
  return fs.existsSync(config.filePath);
}
async function validateApprovalData(_0x4c932d) {
  async function _0x4b0e9b() {
    return new Promise((_0x13a710, _0x56c39e) => {
      fs.readFile(config.filePath, (_0x192514, _0x178186) => {
        if (_0x192514) {
          _0x56c39e(_0x192514);
        }
        _0x13a710(_0x178186.toString());
      });
    });
  }
  const _0x51c1e6 = await _0x4b0e9b();
  if (_0x51c1e6 !== _0x4c932d) {
    await fs.unlinkSync(config.filePath);
    await checkApproval();
  }
}
async function checkScriptIntegrity() {
  try {
    const _0x27a613 = fs.readFileSync(config.checkFilePath, "utf8");
    if (!_0x27a613.includes(config.codeToDetect)) {
      console.log(chalk.red.bold("Terjadi Error, Mungkin Kode Approval Terhapus?, Jika Iya Silahkan Hubungi Creator Untuk Memperbaiki. Jika Tidak Ada Kode Approval Maka Script Tidak Bisa Dijalankan"));
      console.log(chalk.cyan.bold("Credits: Tanaka Sense"));
      process.exit(1);
    }
  } catch (_0x202813) {
    return;
  }
}
const _0x585e53 = {
  checkApproval: checkApproval,
  approveScript: approveScript,
  isApproved: isApproved,
  validateApprovalData: validateApprovalData,
  checkScriptIntegrity: checkScriptIntegrity,
  approvalTimeout: approvalTimeout
};
module.exports = _0x585e53;
console.log(chalk.cyan.bold("Module scriptSecurity loaded successfully - Credits: Tanaka Sense"));