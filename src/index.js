import {setTitle, getEdgeWindows} from './utils/utils.js';
import puppeteer from 'puppeteer';
const edgePath = getEdgeWindows();
import process from 'process';

var args = process.argv.slice(2);

// Set the title of the console window
setTitle('Hello, World!');

function waitForKey(keyCode) {
	return new Promise(resolve => {
		process.stdin.on('data', function (chunk) {
			if (chunk[0] === keyCode) {
				resolve();
				process.stdin.pause();
			}
		});
	});
}

async function main() {
	const browser = await puppeteer.launch({ headless: false, executablePath: edgePath });
	const page = await browser.newPage();
	await page.goto(args[0] || 'https://www.google.com');
}

main();