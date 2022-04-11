import { Application } from './deps.ts';
import router from "./routes.ts";
import errorHandler from "./controllers/errorHandler.ts";
import _404 from "./controllers/404.ts";


const env = Deno.env.toObject()
const PORT = env.PORT || 3000;
const HOST = env.HOST || 'localhost';

const app = new Application();

app.use(router.routes());
app.use(errorHandler);
app.use(_404);
app.use(router.allowedMethods());


console.log(`Server running on port ${PORT}`);

app.listen(`${HOST}:${PORT}`);