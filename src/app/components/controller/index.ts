import { logger } from "../../libs/logger";

const get = (req, res) => res.json({ data: "Hello World!!" });
const post = (req, res) => res.json({ params: req.body });

export const routes = [
  { path: "/", method: "get", component: get },
  { path: "/", method: "post", component: post },
];
