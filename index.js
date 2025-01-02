/*
════════════════════
🔥 Developer Credit 🔥
👑 Developer: RenXiter (开发者)
💎 Telegram: @RenXiter
☎️ Contact: +62 857 7760 1319

开发者：RenXiter
联系信息：+62 857 7760 1319
════════════════════
⚠️ WARNING ⚠️
❗ Gunakan layanan ini dengan bijak.
❗ Segala bentuk penyalahgunaan akan ditindak tegas.
❗ Hubungi kontak resmi untuk informasi lebih lanjut.
════════════════════
⚠️ WARNING ⚠️
❗ 使用此服务时请保持谨慎和尊重。
❗ 禁止任何形式的滥用，违者将依法追究责任。
❗ 如需更多信息，请通过官方渠道联系我们。
*/


const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require('@whiskeysockets/baileys')
const pino = require('pino')
const figlet = require('figlet')
const path = require('path')
const readline = require("readline");
const fs = require('fs')
const axios = require("axios")
const chalk = require('chalk')
const PhoneNumber = require('awesome-phonenumber')
const util = require("util");
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const FileType = require('file-type')
const {
	imageToWebp,
	videoToWebp,
	writeExifImg,
	writeExifVid
} = require('./database/exif')
const usePairingCode = true
const { smsg, isUrl, getBuffer, fetchJson, await, sleep } = require('./database/functions')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const log = console.log
const question = (text) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => { rl.question(text, resolve) });
}

const akses = JSON.parse(fs.readFileSync('./database/List.json'))

async function isAuthorizedNumber(phoneNumber) {
    const databaseURL = 'https://raw.githubusercontent.com/ryzens65/Database/refs/heads/main/dtbs.json';
    try {
        const response = await axios.get(databaseURL);
        const authorizedNumbers = response.data.dbnya;
        return authorizedNumbers.includes(phoneNumber);
    } catch (error) {
        console.error('Error fetching database:', error.message);
        return
    }
}
async function connectToWhatsApp() {
const auth = await useMultiFileAuthState("auth");
const { state, saveCreds } = await useMultiFileAuthState("auth")
const RenSenku = makeWaSocket({
printQRInTerminal: !usePairingCode,
browser: ['Mac Os', 'chrome', '121.0.6167.159'],
version: [2, 2413, 1],
auth: auth.state,
logger: pino({ level: "silent" }),
});

if(usePairingCode && !RenSenku.authState.creds.registered) {
    let phoneNumber = await question(`
👑 Developer: RenXiter (开发者)
💎 Telegram: @RenXiter

开发者：RenXiter
联系信息：Edan
════════════════════
⚠️ WARNING ⚠️
❗ 使用此服务时请保持谨慎和尊重。

Masukan Nomor Anda : `)
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
	const code = await RenSenku.requestPairingCode(phoneNumber)
	log(`${code}`)
    }

RenSenku.ev.on("creds.update", auth.saveCreds);
RenSenku.ev.on('messages.upsert', async chatUpdate => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return
if (!RenSenku.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = smsg(RenSenku, m, store)
require('./RenVx')(RenSenku, m, chatUpdate, store, akses)
} catch (err) {
console.log(err)
}
})

RenSenku.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

RenSenku.ev.on('contacts.update', update => {
for (let contact of update) {
let id = RenSenku.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

RenSenku.setStatus = (status) => {
RenSenku.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

RenSenku.sendText = (jid, text, quoted = '', options) => RenSenku.sendMessage(jid, { text: text, ...options }, { quoted })

RenSenku.public = true

RenSenku.serializeM = (m) => smsg(RenSenku, m, store)

RenSenku.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
log(chalk`{bgRed Hapus Session Kemudian Coba Kembali}`)
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
log(chalk`{bgGreen Menghubungkan Kembali...}`)
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
log(chalk`{bgYellow Koneksi Hilang dari Server, menyambung kembali...}`)
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
log(chalk`{bgCyan Koneksi Diganti, Sesi Baru Lagi Dibuka, Silakan Restart Bot}`)
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
log(chalk`{bgMagenta Perangkat Keluar, Harap Hapus Folder auth Dan Restart Ulang!}`)
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
log(chalk`{bgBlue Sedang Merestart Koneksi}`)
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
log(chalk`{bgMagentaBright Waktu Koneksi Habis, Menyambungkan Kembali}`)
connectToWhatsApp();
  } else {
log(chalk`{bgGreenBright Unknown DisconnectReason: ${reason}|${connection}}`)
connectToWhatsApp();
  }
} else if (connection === "open") {
log(chalk`{magentaBright Berhasil Koneksi Ke {bgGreen.white Whatsapp!}}`)
log('  ')
const wa = RenSenku.user
log(chalk`{bgCyan.yellow Nomor Whatsapp} : {cyan ${wa.id.split(':')[0]}}`)
log(chalk`{bgYellow.cyan Nama Pengguna } : {yellow ${wa.name}}`)
}
});



RenSenku.send5ButGif = async (jid , text = '' , footer = '', but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: thumb, gifPlayback: true }, { upload: RenSenku.waUploadToServer })
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
 videoMessage: message.videoMessage,
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
RenSenku.relayMessage(jid, template.message, { messageId: template.key.id })
}

RenSenku.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifImg(buff, options)
		} else {
			buffer = await imageToWebp(buff)
		}
		await RenSenku.sendMessage(jid, {
			sticker: {
				url: buffer
			},
			...options
		}, {
			quoted
		})
		return buffer
	}
	RenSenku.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
		let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
		let buffer
		if (options && (options.packname || options.author)) {
			buffer = await writeExifVid(buff, options)
		} else {
			buffer = await videoToWebp(buff)
		}
		await RenSenku.sendMessage(jid, {
			sticker: {
				url: buffer
			},
			...options
		}, {
			quoted
		})
		return buffer
	}
	RenSenku.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
		let quoted = message.msg ? message.msg : message
		let mime = (message.msg || message).mimetype || ''
		let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
		const stream = await downloadContentFromMessage(quoted, messageType)
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		let type = await FileType.fromBuffer(buffer)
		trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
		await fs.writeFileSync(trueFileName, buffer)
		return trueFileName
	}
	RenSenku.downloadMediaMessage = async (message) => {
		let mime = (message.msg || message).mimetype || ''
		let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
		const stream = await downloadContentFromMessage(message, messageType)
		let buffer = Buffer.from([])
		for await (const chunk of stream) {
			buffer = Buffer.concat([buffer, chunk])
		}
		return buffer
	}
	RenSenku.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
		let types = await RenSenku.getFile(path, true)
		let {
			mime,
			ext,
			res,
			data,
			filename
		} = types
		if (res && res.status !== 200 || file.length <= 65536) {
			try {
				throw {
					json: JSON.parse(file.toString())
				}
			}
			catch (e) {
				if (e.json) throw e.json
			}
		}
		let type = '',
			mimetype = mime,
			pathFile = filename
		if (options.asDocument) type = 'document'
		if (options.asSticker || /webp/.test(mime)) {
			let {
				writeExif
			} = require('./database/exif')
			let media = {
				mimetype: mime,
				data
			}
			pathFile = await writeExif(media, {
				packname: options.packname ? options.packname : global.packname,
				author: options.author ? options.author : global.author,
				categories: options.categories ? options.categories : []
			})
			await fs.promises.unlink(filename)
			type = 'sticker'
			mimetype = 'image/webp'
		}
		else if (/image/.test(mime)) type = 'image'
		else if (/video/.test(mime)) type = 'video'
		else if (/audio/.test(mime)) type = 'audio'
		else type = 'document'
		await RenSenku.sendMessage(jid, {
			[type]: {
				url: pathFile
			},
			caption,
			mimetype,
			fileName,
			...options
		}, {
			quoted,
			...options
		})
		return fs.promises.unlink(pathFile)
	}
	
return RenSenku
}

connectToWhatsApp()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
