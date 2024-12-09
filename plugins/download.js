const { fetchJson } = require('../lib/functions')
const {readEnv} = require('../lib/database')
const { cmd, commands } = require('../command')

const apilink = 'https://www.dark-yasiya-api.site'

cmd({
    pattern: "fb",
    alias: ["facebook", "fbdl"],
    desc: "download fb videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
        
        if (!q && !q.startsWith("https://")) return reply("*_Please give me a facebook url._*")

        let data = await fetchJson(`${apilink}/download/fbdl1?url=${q}`)

         if (!data.result) {
            return reply("*_Can't download your facebook video._*");
        }

let desc = `*_INFINITY WA BOT FACEBOOK DOWNLOADER_* 📥

🖇️ *Link:* ${data.result.url}

🔢 Reply Below Number :

_HD QUALITY_

1.1 || Video
1.2 || Document

_SD QUALITY_

2.1 || Video
2.2 || Document

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

const fdChannel = {
            newsletterJid: "120363352976453510@newsletter",
            newsletterName: "INFINITY WA BOT",
            serverMessageId: 999
          };
          const contextMsg = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: fdChannel
          };
          const msgBody = {
            image : { url : data.result.thumbnail },
            caption : desc,
            contextInfo: contextMsg
          };
         let inf = await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })

//==========number reply==========

conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === inf.key.id) {
                switch (selectedOption) {
                    case '1.1':

                        await conn.sendMessage(from,{video: {url:data.result.hd},mimetype:"video/mp4",caption: `*HD Quality*\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ` },{quoted: mek})
                        
                        break;
                         case '1.2':

                        await conn.sendMessage(from,{document: {url: data.result.hd },mimetype:"video/mp4",fileName:"INFINITY WA BOT FB DL.mp4",caption:"*HD Quality*\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted: mek })
                        
                        break; 
                    case '2.1':

                        await conn.sendMessage(from,{video: {url:data.result.sd},mimetype:"video/mp4",caption: `*SD Quality*\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ` },{quoted: mek})

                        break;
                        case '2.2':

                        await conn.sendMessage(from,{document: {url: data.result.sd },mimetype:"video/mp4",fileName:"INFINITY WA BOT FB DL.mp4",caption:"*SD Quality*\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted: mek })

                        break;
                    default:
                        reply("*_Invalid number.Please reply a valid number._*");
                }

            }
        })

    } catch(e) {
      console.log(e)
      reply(`${e}`)
    }
})


cmd({
    pattern: "tt",
    alias: ["tiktok", "ttdl"],
    desc: "download tiktok videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
        
        if (!q && !q.startsWith("https://")) return reply("*_Please give me a tiktok url._*")

        let data = await fetchJson(`${apilink}/download/tiktok?url=${q}`)

         if (!data.result) {
            return reply("*_Can't download your tiktok video._*");
        }
        
let desc = `*_INFINITY WA BOT TIKTOK DOWNLOADER_* 📥

┌───────────────────
├ ℹ️ *Title:* ${data.result.title}
├ 👤 *Author:* ${data.result.author}
├ 👁️‍🗨️ *Views:* ${data.result.views}
├ 🕘 *Duration:* ${data.result.duration}
├ 🖇️ *Link:* ${q}
└───────────────────

🔢 Reply Below Number :

1 || Without WaterMark
2 || With WaterMark
3 || Audio

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

const fdChannel = {
            newsletterJid: "120363352976453510@newsletter",
            newsletterName: "INFINITY WA BOT",
            serverMessageId: 999
          };
          const contextMsg = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: fdChannel
          };
          const msgBody = {
            image : { url : data.result.cover },
            caption : desc,
            contextInfo: contextMsg
          };
         let inf = await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })

//==========number reply==========

conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === inf.key.id) {
                switch (selectedOption) {
                    case '1':

                        await conn.sendMessage(from,{video: {url:data.result.hdVideo},mimetype:"video/mp4",caption: `*Without WaterMark*\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ` },{quoted: mek})
                        
                        break; 
                    case '2':

                         await conn.sendMessage(from,{video: {url:data.result.wmVideo},mimetype:"video/mp4",caption: `*With WaterMark*\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ` },{quoted: mek})

                        break;
                    case '3':

                         await conn.sendMessage(from,{audio: {url:data.result.sound},mimetype:"audio/mpeg"},{quoted: mek})

                        break;
                    default:
                        reply("*_Invalid number.Please reply a valid number._*");
                }

            }
        })

    } catch(e) {
      console.log(e)
      reply(`${e}`)
    }
})

cmd({
    pattern: "gdrive",
    alias: ["googledrive", "drive"],
    desc: "Download google drive file",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q && !q.startsWith('https://drive')) return reply("*_Please give me a google drive url._*")

let data = await fetchJson(`https://api.fgmods.xyz/api/downloader/gdrive?url=${q}&apikey=nRHt2lt5`)

let dl_link = data.result.downloadUrl

        if(!dl_link) {
            return reply("*_Can't download your file._*");
        }

await conn.sendMessage(from,{document: {url: dl_link },mimetype: data.result.mimetype ,fileName: data.result.fileName ,caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ"},{quoted: mek});
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "mfire",
    alias: ["mediafire", "mfdl"],
    desc: "Download mediafire file",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q && !q.startsWith('https://www.mediafire.com')) return reply("*_Please give me a mediafire url._*")

let data = await fetchJson(`${apilink}/download/mfire?url=${q}`)

let downloadUrl = data.result.dl_link

        if(!downloadUrl) {
            return reply("*_Can't download your file._*");
        }

let desc = `*_INFINITY WA BOT MEDIAFIRE DOWNLOADER_* 📥

*File name :* ${data.result.fileName}

*Size :* ${data.result.size}

🔢 Reply Below Number :

1 || Download file

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

const fdChannel = {
            newsletterJid: "120363352976453510@newsletter",
            newsletterName: "INFINITY WA BOT",
            serverMessageId: 999
          };
          const contextMsg = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: fdChannel
          };
          const msgBody = {
            text : desc,
            contextInfo: contextMsg
          };
         let inf = await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })

//==========number reply==========

conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === inf.key.id) {
                switch (selectedOption) {
                    case '1':

                       await conn.sendMessage(from,{document: {url: downloadUrl },mimetype: data.result.fileType ,fileName: downloadUrl ,caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted: mek})
                        
                        break; 
                    default:
                        reply("*_Invalid number.Please reply a valid number._*");
                }

            }
        })
        
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "sub",
    alias: ["subtitle", "subdl"],
    desc: "Download subtitles",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q) return reply("*_Please give me a movie name to download subtitle._*")
      
let data = await fetchJson(`${apilink}/search/zoom?text=${q}`)
      
let subSearch = data.result.data

        if (!subSearch) {
            return reply("*_Can't find your subtitle._*");
        }

let subDl = await fetchJson(`${apilink}/download/zoom?url=${subSearch[0].url}`)
let subDLink = subDl.result.data.dl_link
let subInfo = subDl.result.data
      
if(!subDLink) return reply("_*Can't download your subtitle.*_")
      
let msg = `*_INFINITY WA BOT SUBTITLE DOWNLOADER_* 📥

*Movie name :* ${subInfo.title}

*Description :* ${subInfo.desc}

🔢 Reply Below Number :

1 || ZIP File
2 || RAR File

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

let send = await conn.sendMessage(from,{text:msg},{quoted:mek})

conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === send.key.id) {
                switch (selectedOption) {
                    case '1':
        
await conn.sendMessage(from,{document: {url: subDLink },mimetype:"application/zip-compressed",fileName: subInfo.title + ".zip",caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted: mek});

                        break;
                     case '2':
        
await conn.sendMessage(from,{document: {url: subDLink },mimetype:"application/x-rar-compressed",fileName: subInfo.title + ".rar",caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted: mek});

                        break;
                    default:
                        reply("*_Invalid number.Please reply a valid number._*");
                }

            }
        });
                        
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "apk",
    desc: "Download apk",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q) return reply("*_Please give me a apk name._*")

let data = await fetchJson(`${apilink}/download/apk?id=${q}`)

let appdlink = data.result.dl_link

        if (!appdlink) {
            return reply("*_Can't find your apk._*");
        }

let msg = `*_INFINITY WA BOT APK DOWNLOADER_* 📥

┌───────────────────
├ 📚 *Name :* ${data.result.name}
├ 📦 *Package :* ${data.result.package}
├ ⬆ *Last update :* ${data.result.lastUpdate}
├ 📥 *Size :* ${data.result.size}
└───────────────────

🔢 Reply Below Number :

1 || Download apk

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

let send = await conn.sendMessage(from,{image:{url: data.result.image},caption:msg},{quoted:mek})

conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === send.key.id) {
                switch (selectedOption) {
                    case '1':
        
await conn.sendMessage(from,{document: {url: appdlink },mimetype:"application/vnd.android.package-archive",fileName: data.result.name + ".apk",caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted: mek});

                        break;
                    default:
                        reply("*_Invalid number.Please reply a valid number._*");
                }

            }
        });
                        
}catch(e){
console.log(e)
reply(`${e}`)
}
})
