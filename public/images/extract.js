const fs = require('fs');
const path = require('path');

const files = [
    'DigitalAds.svg',
    'SEO&Content.svg',
    'SocialMedia.svg',
    'Websites & Funnels.svg',
    'Branding & Creative.svg',
    'Email & Automation.svg'
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${file}`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/data:image\/png;base64,([^"]+)/);

    if (match && match[1]) {
        const buffer = Buffer.from(match[1], 'base64');
        const newFileName = file.replace('.svg', '.png');
        const newFilePath = path.join(__dirname, newFileName);
        fs.writeFileSync(newFilePath, buffer);
        console.log(`Extracted ${newFileName}: ${(buffer.length / 1024 / 1024).toFixed(2)} MB`);
    } else {
        console.log(`No base64 image found in ${file}`);
    }
});
