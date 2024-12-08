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


// Define your API key and endpoint
const apiKey = 'vk-rQFpHCGbR6QLyrqdnaR32WmDIoC8vlDMYoUbXFNWYFZE9';  // Replace with your actual API key
const apiUrl = 'https://api.vyro.ai/v2/image/generations'; // Replace with actual API URL

// Create a new FormData instance to send the data as multipart/form-data
const form = new FormData();

// Define the parameters for the image generation
const prompt = 'A beautiful landscape with mountains and a river at sunset'; // Example prompt
const style = 'realistic';  // Define the style for the generated image (e.g., 'realistic', 'cartoon', etc.)

// Append the fields to the FormData object
form.append('prompt', prompt);
form.append('n', 1); // Number of images to generate
form.append('size', '1024x1024'); // Image size (adjust as needed)
form.append('style', style);  // Add style parameter

// Optionally, if you need to send a file (for example, an image file), you can append it like this:
// form.append('file', fs.createReadStream('/path/to/your/image.png'));

// Make the API request to the Imagine API with the correct headers
axios.post(apiUrl, form, {
    headers: {
        ...form.getHeaders(),
        'Authorization': `Bearer ${apiKey}`, // Add your API key to the authorization header
    }
})
.then(response => {
    // Handle the response and get the generated image URL
    const imageUrl = response.data.image_url; // Assuming the API response contains an 'image_url'
    console.log(response);
})
.catch(error => {
    console.error('Error generating image:', error.response ? error.response.data : error.message);
});




}catch(e){
console.log(e)
reply(`${e}`)
}
})
