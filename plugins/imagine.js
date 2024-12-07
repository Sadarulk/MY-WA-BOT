const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const axios = require('axios')

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
if(!q) return reply("*_Please give me a text._*")

// Define your API key and endpoint
const apiKey = 'vk-rQFpHCGbR6QLyrqdnaR32WmDIoC8vlDMYoUbXFNWYFZE9'; // Replace with your actual API key
const apiUrl = 'https://api.vyro.ai/v2/image/generations'; // Replace with the actual API URL

// Define the parameters for the image generation
const prompt = 'A beautiful landscape with mountains and a river at sunset'; // Example prompt

// Create the request payload
const requestData = {
    prompt: prompt,
    n: 1, // Number of images to generate
    size: '1024x1024', // Image size (adjust as needed)
};

// Make the API request to Imagine API
axios.post(apiUrl, requestData, {
    headers: {
        'Authorization': `Bearer ${apiKey}`, // Add your API key to the authorization header
        'Content-Type': 'application/json',
    }
})
.then(response => {
    // Handle the response and get the generated image URL
    const imageUrl = response.data.image_url; // Assuming the API response contains an 'image_url'
    console.log('Generated Image URL:', imageUrl);
})
.catch(error => {
    console.error('Error generating image:', error.response ? error.response.data : error.message);
});


}catch(e){
console.log(e)
reply(`${e}`)
}
})
