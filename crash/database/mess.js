require("./global")

const mess = {
   wait: "*`[ ✵ ] Sabar Ya Anjeng*`*",
   success: "*`[ ✵ ] Sukses Dong`*",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "*`[ ✵ ] Teks Nya Mana?`*",
       link: "*`[ ✵ ] Link Nya Mana?`*",
   },
   error: {
       fitur: "*`[ ✵ ] Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki`*",
   },
   only: {
       group: "*`[ ✵ ] Fitur Ini Cuma Bisa Di Akses Di Dalam Group`*",
       private: "`[ ✵ ] Fitur Ini Cuma Bisa Di Akses Di Privat Chat`",
       owner: "*`[ ✵ ] Sok Asik Ngentod`*",
       admin: "*`[ ✵ ] Fitur Ini Cuma Bisa Di Akses Oleh Admin`*",
       badmin: "*`[ ✵ ] Gabisa, Mangkanya Bot ViperTzy Jadiin Admin`*",
       premium: "*`[ ✵ ] Fitur Ini Cuma Bisa Di Akses Oleh Member Prem ViperTzy`*",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})