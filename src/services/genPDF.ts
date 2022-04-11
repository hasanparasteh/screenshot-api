import { puppeteer, PDFOptions } from '../deps.ts'

export default async (url: string, options: PDFOptions, viewport: { width: number, height: number }) => {
    // setup browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({
        width: viewport.width,
        height: viewport.height,
        deviceScaleFactor: 1,
    });

    await page.goto(url, {
        waitUntil: "networkidle2",
    });

    const pdfBuffer = await page.pdf(options);

    await browser.close();

    return pdfBuffer;
}