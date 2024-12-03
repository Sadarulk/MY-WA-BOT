const { fetchJson } = require('../lib/functions')
const {readEnv} = require('../lib/database')
const { cmd, commands } = require('../command')

const apilink = 'https://rest-api-dark-shan.vercel.app/'

cmd({
    pattern: "mvsearch2",
    desc: "search movies",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

        if (!isOwner) {
            return reply(
                "*_This is an owner cmd_*"
            )
        }
    

const mv = await fetchJson(`${apilink}download/cinesubz-search?q=${q}`)

let array = mv.data

        if(array.length === 0) {
return reply(`*_Can't find this movie !_*`)
        }       

let result = array.map((movie, index) => `${index + 1}. *Movie Name :* ${array[index].title}\n*Category :* ${array[index].category}\n*Year :* ${array[index].year}\n*Link :* ${array[index].link}`).join("\n\n");

let dt = `*_INFINITY WA BOT MOVIE SEARCH 🔎_*\n\n`
let cap = `\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`
            
await conn.sendMessage(from, { text: `${dt} ${result} ${cap}` }, {quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "infosend2",
    desc: "send movie details",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        const config = await readEnv()
        if(config.BLOCK_JID.includes(from)) return
        if(!isOwner) return reply('*_This is an owner cmd._*')

        let code = await conn.groupInviteCode('120363355439809658@g.us')
        let id = config.MV_SEND_JID
        
let a = q.split(" & ")

let b = a[0]
let c = a[1]

const mvInfo = await fetchJson(`${apilink}download/cinesubz-dl?q=${b}`)

if(b && !c && b.startsWith('https://cinesubz.co/')) {

let msg = `🍟 *${mvInfo.data.title}*

🧿 *Release Date :* ${mvInfo.data.date}

🌍 *Country :* ${mvInfo.data.country}

⏱ *Duration :* ${mvInfo.data.duration}

⭐ *IMDB Rate :* ${mvInfo.data.rating}

🖇️ *Link* : ${b}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬

● ɢʀᴏᴜᴘ ʟɪɴᴋ : https://chat.whatsapp.com/${code}

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage(id ,{image:{url: mvInfo.data.image},caption:msg})

} else if(b && c && b.startsWith('https://cinesubz.co/')){

let msg = `🍟 *${mvInfo.data.title}*

🧿 *Release Date :* ${mvInfo.data.date}

🌍 *Country :* ${mvInfo.data.country}

⏱ *Duration :* ${mvInfo.data.duration}

⭐ *IMDB Rate :* ${mvInfo.data.rating}

🖇️ *Link* : ${b}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬

● ɢʀᴏᴜᴘ ʟɪɴᴋ : https://chat.whatsapp.com/${code}

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage(c ,{image:{url: mvInfo.data.image},caption:msg})

} else {

return reply('*_Please give me a cinesuz.co url & jid._*')

}
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
