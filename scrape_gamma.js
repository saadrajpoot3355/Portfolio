const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  console.log('Launching browser non-headless with user agent...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });

  console.log('Navigating to Gamma portfolio...');
  await page.goto('https://gamma.app/docs/SAAD-RAJPOOT-tn9o7xoxxcm80si?mode=doc', {
    waitUntil: 'networkidle2',
    timeout: 90000
  });

  console.log('Waiting 25s for full page render...');
  await new Promise(r => setTimeout(r, 25000));

  // Scroll down multiple times to load all cards
  for(let i=0; i<10; i++) {
    await page.evaluate(() => window.scrollBy(0, 1000));
    await new Promise(r => setTimeout(r, 1000));
  }

  const text = await page.evaluate(() => document.body.innerText);
  console.log('Extracted text length:', text.length);

  fs.writeFileSync('saad_portfolio_extracted.txt', text, 'utf-8');
  console.log('Saved extracted text!');

  await browser.close();
})();
