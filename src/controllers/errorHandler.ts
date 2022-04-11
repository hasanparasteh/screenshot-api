import { Response } from "https://deno.land/x/oak@v10.5.1/mod.ts";


export default async ({ response }: { response: Response }, nextFn: any) => {
    try {
        await nextFn();
    } catch (err) {
        response.status = 500;
        response.body = { msg: err.message };
    }
};