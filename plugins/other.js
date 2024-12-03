const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://dark-yasiya-api-new.vercel.app'

cmd({
    pattern: "lyrics",
    alias: ["lyric"],
    desc: "get lyrics",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!q) return reply("*_Please give me a song name_*")

const data = await fetchJson(`${apilink}/other/lyrics?text=${q}`)

        if (!data || data.result.length === 0) {
            return reply("*_Can't find anything._*");
        }

const msg = `*_INFINITY WA BOT SONG LYRICS_*

*Song :* ${data.result.album}

*Artist :* ${data.result.artists}

${data.result.lyric}

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

          const contextMsg = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
          }
          const msgBody = {
            text: msg,
            contextInfo: contextMsg
          }
         await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })
      
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "textstyle",
    alias: ["fancytext", "fancy"],
    desc: "get fancy text",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!q) return reply("*_Please give me a text._*")

const data = await fetchJson(`${apilink}/other/font?text=${q}`)

if (!data || data.result.length === 0) {
            return reply("*_Can't find anything._*");
        }

const array = data.result
      
const fancyStyle = array.map((fancy, index) => {
            return `${index + 1} || ${fancy.result}` 
        }).join("\n\n")
      
let msg = `*_INFINITY WA BOT TEXT STYLES_*

*Text :* ${q}

${fancyStyle}

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
            text: msg,
            contextInfo: contextMsg
          };
         let inf = await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })

conn.ev.on('messages.upsert', async (msgUpdate) => {
            let msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            let selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === inf.key.id) {

		    let index = parseInt(selectedOption)

    reply(`${array[index-1].result}`)

}catch(e){
console.log(e)
reply(`${e}`)
}
})
