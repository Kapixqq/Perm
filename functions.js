// __                       .__        __        .__         ___.    
//|  | __ ___________  _____|__|____  |  | __    |  |__  __ _\_ |__  
//|  |/ // __ \_  __ \/  ___/  \__  \ |  |/ /    |  |  \|  |  \ __ \ 
//|    <\  ___/|  | \/\___ \|  |/ __ \|    <     |   Y  \  |  / \_\ \
//|__|_ \\___  >__|  /____  >__(____  /__|_ \    |___|  /____/|___  /
//	 \/    \/           \/        \/     \/         \/          \/ 
//
//
//discord.gg/ebBY5CRMdG
//
// __                       .__        __        .__         ___.    
//|  | __ ___________  _____|__|____  |  | __    |  |__  __ _\_ |__  
//|  |/ // __ \_  __ \/  ___/  \__  \ |  |/ /    |  |  \|  |  \ __ \ 
//|    <\  ___/|  | \/\___ \|  |/ __ \|    <     |   Y  \  |  / \_\ \
//|__|_ \\___  >__|  /____  >__(____  /__|_ \    |___|  /____/|___  /
//	 \/    \/           \/        \/     \/         \/          \/ 
const fs = require("fs");

module.exports = (client) => {

    fs.readdir("./handlers/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return console.log("There are no events to load...");
        console.log(`Załadowano ${jsfiles.length} eventów...`);
        jsfiles.forEach((f, i) => {
            require(`./handlers/${f}`);
            console.log(`${i + 1}: ${f} załadowane! ✅`);
        });
    });
}
// __                       .__        __        .__         ___.    
//|  | __ ___________  _____|__|____  |  | __    |  |__  __ _\_ |__  
//|  |/ // __ \_  __ \/  ___/  \__  \ |  |/ /    |  |  \|  |  \ __ \ 
//|    <\  ___/|  | \/\___ \|  |/ __ \|    <     |   Y  \  |  / \_\ \
//|__|_ \\___  >__|  /____  >__(____  /__|_ \    |___|  /____/|___  /
//	 \/    \/           \/        \/     \/         \/          \/ 
//
//
//discord.gg/ebBY5CRMdG
//
// __                       .__        __        .__         ___.    
//|  | __ ___________  _____|__|____  |  | __    |  |__  __ _\_ |__  
//|  |/ // __ \_  __ \/  ___/  \__  \ |  |/ /    |  |  \|  |  \ __ \ 
//|    <\  ___/|  | \/\___ \|  |/ __ \|    <     |   Y  \  |  / \_\ \
//|__|_ \\___  >__|  /____  >__(____  /__|_ \    |___|  /____/|___  /
//	 \/    \/           \/        \/     \/         \/          \/ 