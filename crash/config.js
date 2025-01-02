global.namaown = "Crasher"
global.namabot = "Crasher"
global.owner = ["6285929014979"]
global.zura = "youtube.com"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 5
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})

/* YANG DI SINI GK USAH DI UBAH KALO GK NANTI EROR DAN BERMASALAH */