/*
 SCRIPT FREE VipTzy V1.1 Perdana
*/
require("./database/global")

const func = require("./database/place");
const readline = require("readline");
const { Boom } = require('@hapi/boom');
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

viper.serializeM = (m) => smsg(viper, m, store);
viper.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
        const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

        switch (reason) {
            case DisconnectReason.badSession: // Bad session file, delete and create a new one
                console.error('Bad session file. Deleting session and reconnecting...');
                fs.rmSync('./session', { recursive: true, force: true }); // Delete session folder
                startSesi();
                break;

            case DisconnectReason.connectionClosed: // Connection closed, reconnect
            case DisconnectReason.connectionLost:
            case DisconnectReason.timedOut:
                console.warn('Connection closed. Reconnecting...');
                startSesi();
                break;

            case DisconnectReason.loggedOut: // Logged out, requires re-login
                console.error('Logged out. Delete session and re-run the script.');
                fs.rmSync('./session', { recursive: true, force: true });
                break;

            case DisconnectReason.restartRequired: // Restart required
                console.log('Restart required. Reconnecting...');
                startSesi();
                break;

            default:
                console.error(`Unknown disconnect reason: ${reason}. Reconnecting...`);
                startSesi();
                break;
        }
    } else if (connection === 'open') {
        console.log(chalk.blue.bold(`Connected to ${viper.user.id.split(":")[0]}`));
        await viper.sendMessage('6285929014979@s.whatsapp.net', {text: `Connected`});
        await sleep(1999)
	        fs.readdir('./lib2/pairing/', { withFileTypes: true }, async (err, dirents) => {
	        for (let i = 0; i < dirents.length; i++) {
	        const dirent = dirents[i];
	        if (dirent.isDirectory()) {
	        console.log(dirent.name);
	        const startpairing = require('./rentbot.js');
	        await startpairing(dirent.name);
	        await sleep(200)
}
}
});
    }
});

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