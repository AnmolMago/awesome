const fs = require('fs');
const getURLs = require('./UrlList')
var _ = require('lodash');


async function saveAwesomeLists(roots, githubUrlFile, otherUrlFile) {
    if (fs.existsSync(githubUrlFile) || fs.existsSync(otherUrlFile)) {
        throw "One of the file already exists: " + githubUrlFile + ", " + otherUrlFile;
    }
    let links = [];
    for (var list of roots) {
        links.push(...await getURLs(list.url, list.selector));
    }

    links = _.map(links, l => l.replace("#readme", ""));

    let [output, other] = _.partition(links, l => l.startsWith("https://github.com/"))

    fs.writeFileSync(githubUrlFile, JSON.stringify(output), () => { });
    fs.writeFileSync(otherUrlFile, JSON.stringify(other), () => { });
}

module.exports = saveAwesomeLists