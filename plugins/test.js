const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "test",
    desc: "menu the bot",
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭═「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ 」*
*│◈ ʀᴜɴᴛɪᴍᴇ :* ${runtime(process.uptime())}
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰═══════════════○●►*
*╭────────────────○●►*
*┃「  𝘋𝘈𝘙𝘒 𝘕𝘌𝘛𝘏𝘜 𝘔𝘌𝘕𝘜 」*
*╰────────────────○●►*
*╭───────────────○●►*
*╎ 01 OWNER*
*╎ 02 CONVERT*
*╎ 03 AI*
*╎ 04 SEARCG*
*╎ 05 DOWNLOAD* 
*╎ 06 FUN*
*╎ 07 MAIN*
*╎ 08 GROUP*
*╎ 09 OTHER*
*╎ 10 TOOL*
*╰───────────────○●►*
*╭─ 「  𝘋𝘈𝘙𝘒 𝘕𝘌𝘛𝘏𝘜 𝘔𝘋  」*
*╰───────────────○●►*

🌟 ℝ𝔼ℙ𝕃𝕐 𝕥𝕙𝕖 ℕ𝕒𝕞𝕓𝕖𝕣 𝕐𝕠𝕦 𝕨𝕒𝕟𝕥 𝕥𝕠 𝕤𝕖𝕝𝕖𝕔𝕥

💻 *GitHub:*  https://github.com/NETHU-MAX/DARK-NETHU-MD

👩‍💻 *Channel:* https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A

> 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : © ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ 2024`;

        const vv = await conn.sendMessage(from, { image: { url: "https://iili.io/29wAvDu.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◈╾──NETHU OWNER MENU──╼◈*

╭────────●●►
│ • *restart* 
╰──────────────────●●►

*💻 Github :* https://github.com/project-wabot/DARK-NETHU-MD

> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ`);
                        break;
                    case '2':               
                        reply(`*◈╾──NETHU CONVERT MENU──╼◈*

╭────────●●►
│ • *convert* 
╰──────────────────●●►

*💻 Github :* https://github.com/project-wabot/DARK-NETHU-MD

> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ`);
                        break;
                    case '3':               
                        reply(`*◈╾──NETHU AI MENU──╼◈*

╭────────●●►
│ • *ai* 
╰──────────────────●●►

*💻 Github :* https://github.com/project-wabot/DARK-NETHU-MD

> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ`);
                        break;
                    case '4':               
                        reply(`*◈╾──NETHU SEARCH MENU──╼◈*

╭────────●●►
│ • *yts* 
╰──────────────────●●►
╭────────●●►
│ • *srepo* 
╰──────────────────●●►

*💻 Github :* https://github.com/project-wabot/DARK-NETHU-MD

> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ`);
                        break;
                    case '5':               
                        reply(`*◈╾──NETHU DOWNLOAD MENU──╼◈*

╭────────●●►
│ • *apk* 
╰──────────────────●●►
╭────────●●►
│ • *twitter* 
╰──────────────────●●►
╭────────●●►
│ • *gdrive* 
╰──────────────────●●►
╭────────●●►
│ • *mediafire* 
╰──────────────────●●►
╭────────●●►
│ • *fb* 
╰──────────────────●●►
╭────────●●►
│ • *ig* 
╰──────────────────●●►
╭────────●●►
│ • *movie* 
╰──────────────────●●►
╭────────●●►
│ • *song* 
╰──────────────────●●►
╭────────●●►
│ • *video* 
╰──────────────────●●►
╭────────●●►
│ • *play/yt* 
╰──────────────────●●►
╭────────●●►
│ • *song2* 
╰──────────────────●●►
╭────────●●►
│ • *video2* 
╰──────────────────●●►
╭────────●●►
│ • *tiktok* 
╰──────────────────●●►
╭────────●●►
│ • *img* 
╰──────────────────●●►

*💻 Github :* https://github.com/project-wabot/DARK-NETHU-MD

> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ`);
                        break;
                    case '7':               
                        reply(`*◈╾──NETHU MAIN MENU──╼◈*

╭────────●●►
│ • *alive* 
╰──────────────────●●►
╭────────●●►
│ • *about* 
╰──────────────────●●►
╭────────●●►
│ • *menu* 
╰──────────────────●●►
╭────────●●►
│ • *allmenu* 
╰──────────────────●●►
╭────────●●►
│ • *support* 
╰──────────────────●●►
╭────────●●►
│ • *system* 
╰──────────────────●●►
╭────────●●►
│ • *ping* 
╰──────────────────●●►
╭────────●●►
│ • *runtime* 
╰──────────────────●●►

*💻 Github :* https://github.com/project-wabot/DARK-NETHU-MD

> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ`);
                        break;
                    case '8':               
                        reply(`*◈╾──NETHU GROUP MENU──╼◈*

╭────────●●►
│ • *promote* 
╰──────────────────●●►
╭────────●●►
│ • *demote* 
╰──────────────────●●►
╭────────●●►
│ • *kick* 
╰──────────────────●●►
╭────────●●►
│ • *add* 
╰──────────────────●●►
╭────────●●►
│ • *admins* 
╰──────────────────●●►
╭────────●●►
│ • *tagall* 
╰──────────────────●●►
╭────────●●►
│ • *getpic* 
╰──────────────────●●►
╭────────●●►
│ • *setwelcome* 
╰──────────────────●●►
╭────────●●►
│ • *setgoodbye* 
╰──────────────────●●►
╭────────●●►
│ • *admins* 
╰──────────────────●●►
╭────────●●►
│ • *gname* 
╰──────────────────●●►

*💻 Github :* https://github.com/project-wabot/DARK-NETHU-MD

> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ`);
                       break;
                    case '6':               
                        reply(`*◈╾──NETHU FUN MENU──╼◈*

╭────────●●►
│ • *dog* 
╰──────────────────●●►
╭────────●●►
│ • *fact* 
╰──────────────────●●►
╭────────●●►
│ • *hack* 
╰──────────────────●●►
╭────────●●►
│ • *quote* 
╰──────────────────●●►

*💻 Github :* https://github.com/project-wabot/DARK-NETHU-MD

> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ`);

                        break;
                    case '9':               
                        reply(`*◈╾──NETHU OTHER MENU──╼◈*

╭────────●●►
│ • *githubstalk* 
╰──────────────────●●►
╭────────●●►
│ • *trt* 
╰──────────────────●●►
╭────────●●►
│ • *weather* 
╰──────────────────●●►

*💻 Github :* https://github.com/project-wabot/DARK-NETHU-MD

> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
