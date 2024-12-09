const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "tempmail",
    desc: "Get tempmail",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

let data = await fetchJson(`https://api.nexoracle.com/misc/temp-mail-gen?apikey=d2d02440c70a98a415`)

if(!data.result.startsWith('https://')) {
            return reply("*_API limit is over.Try again after 24h._*");
        }

if(!data.result.email) return reply("*_Can't genarate tempmail in this time._*")

let inbox = await fetchJson(`https://api.nexoracle.com/misc/temp-mail-inbox?apikey=d2d02440c70a98a415&id=${data.result.email_id}`)

let msg = `*_INFINITY WA BOT TEMPMAIL_*

*Temp mail :* ${data.result.email}

*Expire time :* ${data.result.expire_at}

_🔢 Reply Below Number :_

1 || Get mail
2 || Get inbox msg

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

let send = await conn.sendMessage(from,{text:msg},{quoted:mek})

conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === send.key.id) {
                switch (selectedOption) {
                    	case '1':
        
await conn.sendMessage(from,{text : data.result.email},{quoted: mek});

                        break;
			case '2':

        if(!inbox.result) return reply("*_No inbox messages._*")
await conn.sendMessage(from,{text : inbox.result},{quoted: mek});

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
    pattern: "lexica",
    desc: "Generate image",
    category: "ai",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q) return reply("*_Please give me a prompt to genarate image._*")

let data = await fetchJson(`https://api.nexoracle.com/ai/lexica?apikey=d2d02440c70a98a415&prompt=${q}`)

        if(!data.result.startsWith('https://')) {
            return reply("*_API limit is over.Try again after 24h._*");
        }
        
await conn.sendMessage(from,{image: {url: data.result},caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ"},{quoted: mek});
    
}catch(e){
console.log(e)
reply(`${e}`)

}
})
