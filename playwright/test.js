const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:58000');
  await page.selectOption('select#colors', 'blue');
  await page.fill('#text', 'Hallo');
  // await browser.close();
})();