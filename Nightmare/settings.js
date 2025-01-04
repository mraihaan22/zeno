require("./Databases/module.js")

//========== Setting Owner ==========//
global.no = "6283809358811"
global.owner = "𝐍𝐈𝐆𝐇𝐓𝐌𝐀𝐑𝐄"
global.bot = "𝐍𝐈𝐆𝐇𝐓𝐌𝐀𝐑𝐄"
global.v = "𝟏𝟏"
global.welcome = false
global.autoread = false
global.anticall = false

//========= Setting Url Foto =========//
global.image = "https://img101.pixhost.to/images/282/549855473_skyzopedia.jpg"

global.msg = {
"error": "𝐌𝐚𝐚𝐟 𝐀𝐝𝐚 𝐄𝐫𝐫𝐨𝐫 𝐃𝐢𝐬𝐢𝐧𝐢, 𝐀𝐣𝐚𝐦 𝐆𝐚𝐧𝐭𝐞𝐧𝐠 𝐋𝐚𝐠𝐢 𝐏𝐞𝐫𝐛𝐚𝐢𝐤𝐚𝐧",
"done": "𝐃𝐨𝐧𝐞𝐞 𝐁𝐨𝐬𝐬🕊", 
"wait": "𝐓𝐮𝐧𝐠𝐠𝐮 𝐁𝐞𝐧𝐭𝐚𝐫 𝐘𝐚𝐚🕊", 
"owner": "`𝐊𝐚𝐦𝐮 𝐒𝐞𝐤𝐚𝐫𝐚𝐧𝐠 𝐎𝐰𝐧𝐞𝐫`", 
"developer": "`𝐊𝐚𝐦𝐮 𝐒𝐞𝐤𝐚𝐫𝐚𝐧𝐠 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫`"
}










































































global.own = "𝐉𝐚𝐦𝐓𝐳𝐲-𝐀𝐭𝐭𝐚𝐜𝐤𝐞𝐫"
global.log = "𖣖"
global.ch = "https://whatsapp.com/channel/0029Vb0i6wtHAdNcGhCOYQ1f"
global.bot = "𝐍𝐈𝐆𝐇𝐓𝐌𝐀𝐑𝐄"
global.ver = "𝟏𝟏"
global.wa = "https://wa.me/6283809358811"
global.logo = "https://img101.pixhost.to/images/282/549855473_skyzopedia.jpg"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})