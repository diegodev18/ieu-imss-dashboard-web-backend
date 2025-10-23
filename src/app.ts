import express from "express";

import { EXPRESS_PORT } from "@/config.js";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.listen(EXPRESS_PORT, () => {
  console.log(`Server is running on http://localhost:${EXPRESS_PORT}`);
});
