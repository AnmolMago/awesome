
const puppeteer = require('puppeteer');
const cookie = require('./cookie.js');

async function ghelp(selector, page) {
    let f = e => e.innerHTML;
    if (selector.startsWith('meta')) {
        f = e => e.content;
    }
    let val = await page.$eval(selector, f);
    return val.trim();
}

async function github_info(url, browser) {
    const page = await browser.newPage();
    page.setCookie(...cookie);
    await page.goto(url, { waitUntil: 'networkidle2' });
    let selectors = {
        'author': '.public .author a',
        'name': '.public strong a',
        'id': 'meta[name=octolytics-dimension-repository_id]',
        'description': 'meta[name=description]',
        'watchers': '.pagehead-actions li:nth-of-type(1) .social-count',
        'stars': '.pagehead-actions li:nth-of-type(2) .social-count',
        'forks': '.pagehead-actions li:nth-of-type(3) .social-count',
        'issues': 'nav span:nth-of-type(2) a .Counter',
        'pull_requests': 'nav span:nth-of-type(3) a .Counter',
        'commits': '.commits .num',
    };

    let data = {};

    for (const key of Object.keys(selectors)) {
        data[key] = await ghelp(selectors[key], page);
    }
    return data;
}

async function scrape_github(links) {
    const browser = await puppeteer.launch();
    try {
        console.time('scrape_github');
        let promises = [];
        for (let i = 0; i < links.length; i++) {
            let link = links[i];
            promises.push(
                github_info(link, browser),
            );
        }
        var values = await Promise.all(promises);
        console.timeEnd('scrape_github');
    } catch (e) {
        console.error(e);
    } finally {
        await browser.close();
    }
    console.log(values);
}

module.exports = {
    scrape_github,
}