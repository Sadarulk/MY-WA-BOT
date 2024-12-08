const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

cmd({
    pattern: "test",
    desc: "AI chat feature",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv()
if(config.BLOCK_JID.includes(from)) return

const apiKey = 'vk-rQFpHCGbR6QLyrqdnaR32WmDIoC8vlDMYoUbXFNWYFZE9';  // Replace with your actual API key
const apiUrl = 'https://api.vyro.ai/v2/image/generations'; // Replace with actual API URL

const form = new FormData();

const prompt = 'A beautiful landscape with mountains and a river at sunset'; // Example prompt
const style = 'realistic';  // Define the style for the generated image (e.g., 'realistic', 'cartoon', etc.)

form.append('prompt', prompt);
form.append('n', 1); // Number of images to generate
form.append('size', '1024x1024'); // Image size (adjust as needed)
form.append('style', style);  // Add style parameter

axios.post(apiUrl, form, {
    headers: {
        ...form.getHeaders(),
        'Authorization': `Bearer ${apiKey}`, // Add your API key to the authorization header
    }
})
.then(response => {
    conn.sendMessage(from, {image : response.data},{quoted:mek})
})
.catch(error => {
    console.error('Error generating image:', error.response ? error.response.data : error.message);
});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
