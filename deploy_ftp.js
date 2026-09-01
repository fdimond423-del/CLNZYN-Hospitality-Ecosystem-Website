const ftp = require("basic-ftp");
const path = require("path");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: "82.197.83.147",
            user: "u240475673.motelworld360.com",
            password: "Ffenil@123",
            secure: false
        });
        console.log("Connected to FTP server.");

        const localDir = path.join(__dirname, "artifacts", "aether-studio", "dist", "public");
        
        const list = await client.list();
        console.log("Remote directory listing:");
        list.forEach(item => console.log(item.name));

        const hasPublicHtml = list.some(item => item.name === "public_html");
        if (hasPublicHtml) {
            console.log("Changing to public_html directory...");
            await client.cd("public_html");
        }

        console.log("Uploading files from", localDir);
        await client.uploadFromDir(localDir);
        console.log("Upload completed successfully.");
    }
    catch(err) {
        console.error("FTP Deployment Error:", err);
    }
    client.close();
}

deploy();
