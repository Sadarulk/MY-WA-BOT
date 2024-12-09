const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    on: "body"
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv()
if(config.BLOCK_JID.includes(from)) return

 const triggerWords = [
      'save','send','dpm','dpn','oni','evanna','ewanna','evahan','ewahan','dapan','meka','mekath','evannako','ewannako','dahan','ewahan','dpam','ewa','eva','dapm','ewano','evano','ewno','ewnna','evnna','snd','ewana','evana','danna','dannako','dannko','dnnko','ewapam','evapam','evapan','ewaham','dako','sv', 'sav', 'seve'
    ];

    if (triggerWords.includes(body)) {
      if (m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo) {
        const quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;

        if (quotedMessage) {
          // Check if it's an image
          if (quotedMessage.imageMessage) {
            const imageCaption = quotedMessage.imageMessage.caption;
            const imageUrl = await conn.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
            await conn.sendMessage(m.from, {
              image: { url: imageUrl },
              caption: imageCaption,
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
              },
            });
          }

          // Check if it's a video
          if (quotedMessage.videoMessage) {
            const videoCaption = quotedMessage.videoMessage.caption;
            const videoUrl = await conn.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
            await conn.sendMessage(m.from, {
              video: { url: videoUrl },
              caption: videoCaption,
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
              },
            });
          }
        }
      }
    }

}catch(e){
console.log(e)
reply(`${e}`)
}
})
