import { chromium } from 'playwright';
import { readFile } from 'node:fs/promises';
const font = await readFile(
  'node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2',
);
const browser = await chromium.launch(
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
    ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }
    : {},
);
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.setContent(
  `<html lang="fr"><head><style>@font-face{font-family:brand;src:url(data:font/woff2;base64,${font.toString('base64')})}*{box-sizing:border-box}body{margin:0;background:#112326;color:#f6f7f3;font-family:brand,sans-serif;padding:65px 75px}.brand{font-size:30px;display:flex;align-items:center;gap:16px}.mark{display:grid;grid-template-columns:15px 15px;gap:4px;transform:rotate(-7deg)}i{height:15px;background:#f6f7f3}i:last-child{background:#d9f47d}h1{font-size:76px;line-height:1.08;letter-spacing:-4px;font-weight:500;margin:55px 0 33px}h1 span{color:#d9f47d}p{font-size:19px;color:#bcc9bf;line-height:1.7;margin:0}.bottom{margin-top:35px;padding-top:25px;border-top:1px solid #3d514e;display:flex;justify-content:space-between;font-size:16px;color:#d3dfd1}</style></head><body><div class="brand"><span class="mark"><i></i><i></i><i></i><i></i></span>La Pépiite IT</div><h1>Conseil. Intégration.<br/><span>Expertise Microsoft.</span></h1><p>Microsoft 365 · Azure · Copilot · Power Platform · Cybersécurité</p><div class="bottom"><span>ESN & intégrateur Microsoft</span><span>www.lapepiite.com</span></div></body></html>`,
);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/social-card.png' });
await browser.close();
