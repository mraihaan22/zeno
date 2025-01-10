require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚"
global.dana = "-"
global.qris = "https://b.top4top.io/p_3199egvlc0.jpg"


// GLOBAL SETTING
global.owner = "6283809358811"
global.namabot = "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚"
global.nomorbot = "6283809358811"
global.namaCreator = "𝐕𝐢𝐩𝐞𝐫 𝐈𝐬 𝐇𝐞𝐫𝐞✰"
global.linkyt = "https://youtube.com/@vipertzyoffc"
global.autoJoin = false
global.antilink = false
global.versisc = '𝐕𝟏.𝟏'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'ptlc_avcD3NM23Dt4YZMM9YKIibACValfRAlmCCfM17r4YqA'
global.capikey = 'ptla_auqiJrdkFn2wIHimpyoL3i0o5F7r0SnWJiBgfFZF77O'
global.domain = 'https://bakso.cireng.amanahbang.xyz'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://b.top4top.io/p_31995kalq0.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VaNBep7AojYwtfrm3237'
global.packname = "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚"
global.author = "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})