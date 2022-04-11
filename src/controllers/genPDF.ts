import { Request, Response } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import genPDF from '../services/genPDF.ts'


export default async ({ request, response }: { request: Request, response: Response }) => {
    if (!request.hasBody) {
        response.status = 400;
        response.body = {
            msg: "You need to send a json..."
        };
        return;
    }

    const { format, url, landscape, displayHeaderFooter, printBackground, width, height, pageRanges } = await request.body().value;

    if (!format || !url || !landscape || !displayHeaderFooter || !printBackground) {
        response.status = 400;
        response.body = {
            msg: "You need to send a json...",
            example: {
                format: "a4",
                url: "https://news.ycombinator.com",
                landscape: true,
                displayHeaderFooter: true,
                printBackground: true,
                width: 1920,
                height: 1080
            }
        };
        return;
    }


    let pdfBuffer;
    try {
        pdfBuffer = await genPDF(url, {
            format,
            landscape,
            displayHeaderFooter,
            printBackground,
            pageRanges: pageRanges || "1-1"
        }, {
            width: width || 1920,
            height: height || 1080,
        })
    } catch (error) {
        response.status = 500;
        response.body = {
            msg: "something went wrong...",
        };
        return;
    }

    response.headers.set('Content-Type', 'application/pdf');
    response.body = pdfBuffer
};