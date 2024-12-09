const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "textsend",
    desc: "text send to jid",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  
const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply("*_This is an owner cmd._*")
if(!m.quoted) return reply("*_Please reply a text msg._*")
if(!q) return reply("*_Please give me a jid to send this text._*")

await conn.sendMessage(q, { text : m.quoted.msg })
    
reply("*_Text send successful ✅_*")
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
