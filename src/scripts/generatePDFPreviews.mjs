import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { join } from 'path';

const PDF_DIR = 'public';
const PORT = 3000;
const LANGS = ['en', 'ru'];

mkdirSync(PDF_DIR, { recursive: true });

const browser = await puppeteer.launch();
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

console.log('All PDFs generated.');
