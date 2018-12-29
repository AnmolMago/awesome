const fs = require('fs');
let saveAwesomeLists = require("./scrape/AwesomeLists")

let roots = [
    { url: 'https://github.com/sindresorhus/awesome', selector: "#readme a" },
    { url: 'https://github.com/bayandin/awesome-awesomeness', selector: "#readme a" },
]

let githubUrlFile = "./output/lists.json", otherUrlFile = "./output/other.json";

async function main() {
    if (!fs.existsSync(githubUrlFile) && !fs.existsSync(otherUrlFile)) {
        console.log("Creating Lists...")
        await saveAwesomeLists(roots, githubUrlFile, otherUrlFile);
    }

    let awesomeLists = require(githubUrlFile);
    console.log(awesomeLists.length + "lists found");

    // Parse 
}

main();