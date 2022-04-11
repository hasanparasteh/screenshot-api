# Make PDF: The Easy Way

This is a simple implementation of the pupeteer library that provides a simple way to generate pdf documents from any url!

Run below command to start the server:

```sh
> deno run --allow-net --allow-env --allow-read --allow-write --allow-run --unstable src/server.ts
```

Then nvaigate to `http://localhost:3000/api/pdf` and send a request with below json:

```json
{
    "format": "a4",
    "url": "https://news.ycombinator.com/",
    "landscape": true,
    "displayHeaderFooter": true,
    "printBackground": true,
    "width": 1920,
    "height": 1080
}
```
