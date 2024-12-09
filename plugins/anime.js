const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const randomChar = require('anime-character-random')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "anime",
    desc: "Get random anime",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv()
if(config.BLOCK_JID.includes(from)) return
  
let data = await randomChar.GetChar()

let msg = `*_${data.AnimeName}_*

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
            image: {url: `${data.CharacterImage}`},
            caption: msg,
            contextInfo: contextMsg
          };
         await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "couple",
    desc: "Get random couple photo",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv()
if(config.BLOCK_JID.includes(from)) return
  
let data = await fetchJson(`https://api.fgmods.xyz/api/img/couple?apikey=nRHt2lt5`)

let boy = `*_Boy_*

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
            image: {url: `${data.result.boy}`},
            caption: boy,
            contextInfo: contextMsg
          };
         await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })

let girl = `*_Girl_*

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

const fdChannel2 = {
            newsletterJid: "120363352976453510@newsletter",
            newsletterName: "INFINITY WA BOT",
            serverMessageId: 999
          };
          const contextMsg2 = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: fdChannel2
          };
          const msgBody2 = {
            image: {url: `${data.result.girl}`},
            caption: girl,
            contextInfo: contextMsg2
          };
         await conn.sendMessage(from, msgBody2, {
            'quoted': mek
          })
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
