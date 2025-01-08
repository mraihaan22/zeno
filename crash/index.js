/*
 SCRIPT FREE VipTzy V1.1 Perdana
*/
require("./database/global")

const func = require("./database/place")
const readline = require("readline");
const usePairingCode = true
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
    console.log(chalk.red.bold('╔╗──╔╦══╦═══╦═══╦═══╗\n║╚╗╔╝╠╣╠╣╔═╗║╔══╣╔═╗║\n╚╗║║╔╝║║║╚═╝║╚══╣╚═╝║\n─║╚╝║─║║║╔══╣╔══╣╔╗╔╝\n─╚╗╔╝╔╣╠╣║──║╚══╣║║╚╗\n──╚╝─╚══╩╝──╚═══╩╝╚═╝\n╔════╦════╦╗──╔╗\n║╔╗╔╗╠══╗═║╚╗╔╝║\n╚╝║║╚╝─╔╝╔╩╗╚╝╔╝\n──║║──╔╝╔╝─╚╗╔╝─\n──║║─╔╝═╚═╗─║║──\n──╚╝─╚════╝─╚╝──\n\n𝐕𝐢𝐩𝐓𝐳𝐲 𝐕𝐞𝐫𝐬𝐢 𝟏.𝟏 𝐏𝐞𝐫𝐝𝐚𝐧𝐚\n\n𝐂𝐫𝐞𝐚𝐭𝐞𝐝 : 𝐕𝐢𝐩𝐞𝐫𝐓𝐳𝐲\n𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : @vipertzyy\n𝐘𝐨𝐮𝐭𝐮𝐛𝐞 : @vipertzyoffc'))
const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: Browsers.windows('Firefox')
// browser: ['Chrome (Linux)', '', '']
}
const viper = func.makeWASocket(connectionOptions)
if(usePairingCode && !viper.authState.creds.registered) {
		const phoneNumber = await question(chalk.green('\nEnter Your Number\nNumber : '));
		const code = await viper.requestPairingCode(phoneNumber.trim())
		console.log(chalk.green(`Your Pairing Code : ${code} `))

	}
store.bind(viper.ev)

viper.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
viper.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
viper.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `Tersambung`)
viper.sendMessage(`6285929014979@s.whatsapp.net`, { text: `\`𝐇𝐚𝐥𝐨 𝐕𝐢𝐩𝐞𝐫\`
  > Mantap`})
if (autoJoin) {
viper.groupAcceptInvite(codeInvite)
}
}
})

viper.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return viper.readMessages([m.key])
if (!viper.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(viper, m, store)
require("./ViperTzy")(viper, m, store)
} catch (err) {
console.log(err)
}
})

viper.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = viper.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

viper.public = true

viper.ev.on('creds.update', saveCreds)
return viper
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})