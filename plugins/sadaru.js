const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    on: "body"
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

const bioUrl = `https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/sadarubiovideo.mp4?raw=true`

const msg = `*Sadaru is developer and owner of INFINITY WhatsApp Bot.He is a smart boy.Below is a description of him.*

*🌟 A short about of Sadaru ⤵*

*Name :* Sadaru
*Age :* 17+ 🎉
*Lives in :* Kurunegala 🌍
*Contact :* +94701814946 ☎️

*Skills:*
- JavaScript Developer (Beginner) 💻
- Problem Solver 🧩
- Creative Thinker 💡

*Hobbies:*
- Bot Developing 🤖
- Learning Programming 📚
- Learning for Life 🌱

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`
  
if(body === 'Sadaru') {

await conn.sendMessage(
    from, 
    { 
        video: {url: bioUrl}, 
        caption: msg,
        gifPlayback: true
    },{quoted: mek}
)

} else if(body === 'sadaru') {

await conn.sendMessage(
    from, 
    { 
        video: {url: bioUrl}, 
        caption: msg,
        gifPlayback: true
    },{quoted: mek}
)
}
    
}catch(e){
console.log(e)
reply(`${e}`)

}
})