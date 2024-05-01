import 'dotenv/config';
import * as express from 'express';
import helmet from 'helmet';
import * as cors from "cors";
import * as compression from "compression";

const app = express();

const host = process.env.NODE_HOST;
const port = Number(process.env.NODE_PORT);

app.use(helmet());
app.options('*', cors({ credentials: true, origin: true }));
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Hello world!"
    })
});

app.listen(port, host, () => {
    console.log(`[EXPRESS] Server listening on http://${host}/${port}/`)
})