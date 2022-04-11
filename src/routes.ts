import { Router } from "./deps.ts";
import genPDF from "./controllers/genPDF.ts";

const router = new Router();

router
    .post("/api/pdf", genPDF);


export default router;
