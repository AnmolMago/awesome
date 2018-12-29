var Crawler = require("crawler");

function isURL(str) {
    if (str === undefined) return false;
    var urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
    var url = new RegExp(urlRegex, 'i');
    return str.length < 2083 && url.test(str);
}

async function getURLs(url, selector) {
    var c = new Crawler({
        maxConnections: 10,
    });
    return new Promise((resolve, reject) => {
        let options = {};
        options.uri = url;
        options.callback = function (error, res, done) {
            let $ = res.$;
            if (error) return console.error(error);

            let lists = [];
            $(selector).each(function (i, a) {
                let link = $(a).attr('href');
                if (!isURL(link)) return;
                lists.push(link);
            });
            done();
            resolve(lists);
        }
        c.queue(options);
    });
}

module.exports = getURLs
