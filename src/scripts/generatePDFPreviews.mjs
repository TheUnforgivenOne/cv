import puppeteer from 'puppeteer';
import { createServer } from 'http-server';
import { mkdirSync } from 'fs';
import { join } from 'path';

const isDev = process.argv.includes('--dev');

const OUT_DIR = 'out';
const PDF_DIR = isDev ? 'public' : OUT_DIR;
const PORT = 3000;
const LANGS = ['en', 'ru'];

mkdirSync(PDF_DIR, { recursive: true });

const server = createServer({ root: OUT_DIR });
await new Promise((resolve) => server.listen(PORT, resolve));

console.log(`Serving ${OUT_DIR} at http://localhost:${PORT}`);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox'],
});
const page = await browser.newPage();

for (const lang of LANGS) {
  const url = `http://localhost:${PORT}/${lang}`;
  const pdfPath = join(PDF_DIR, `CV_Vladislav_Potapov_${lang}.pdf`);

  console.log(`Generating PDF for: ${url}`);

  await page.setViewport({ width: 1200, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle0' });

  await new Promise((resolve) => setTimeout(resolve, 2000));

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
  });

  console.log(`Saved to: ${pdfPath}`);
}

await browser.close();
server.close();

console.log('All PDFs generated.');
