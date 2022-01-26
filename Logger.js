// How to call console
// Logger.<TYPE OF ERROR>(<PARAMS>);
//asd

// Error builder
// TIME | TYPE | console log

// Error example
// 22-01-2022 23:48:30 | ERROR | Failed connection to DataBase

class Logger{
    // ERROR is an unexpected event and could impact the functionality of your app
    static error(infoAboutError){
        const now = new Date;
        let date = now.getDate();
        let month = now.getMonth() + 1;
        let year = now.getFullYear();

        let hour = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        console.log(`\n\x1b[31m${date}-${month}-${year} ${hour}:${minutes}:${seconds} | ERROR | ${infoAboutError}\n\x1b[0m`);
    }

    // WARN includes logs that may become errors and that you detected unusual and unexpected app behavior
    static warn(infoAboutError){
        const now = new Date;
        let date = now.getDate();
        let month = now.getMonth() + 1;
        let year = now.getFullYear();

        let hour = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        console.log(`\n\x1b[33m${date}-${month}-${year} ${hour}:${minutes}:${seconds} | WARN | ${infoAboutError}\n\x1b[0m`);
    }

    // INFO logs reflect normal application behavior
    static info(infoAboutError){
        const now = new Date;
        let date = now.getDate();
        let month = now.getMonth() + 1;
        let year = now.getFullYear();

        let hour = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        console.log(`\n\x1b[36m${date}-${month}-${year} ${hour}:${minutes}:${seconds} | INFO | ${infoAboutError}\n\x1b[0m`);

    } 

    // DEBUG logs are particularly useful during debugging
    static debug(infoAboutError){
        const now = new Date;
        let date = now.getDate();
        let month = now.getMonth() + 1;
        let year = now.getFullYear();

        let hour = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        console.log(`\n\x1b[37m${date}-${month}-${year} ${hour}:${minutes}:${seconds} | INFO | ${infoAboutError}\n\x1b[0m`);
    }
}

// Testing...
Logger.error("Bro this code has fatal error");
Logger.warn("Bro this code has scary warning");
Logger.info("Bro this output is important");
Logger.debug("Bro this output is trash");

// Export 'Logger' to project
module.exports = Logger;