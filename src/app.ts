import express from "express";

import { SERVER_PORT } from "@/config";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello, World!");
});

app.listen(SERVER_PORT, () => {
  console.log(
    `Server is running on http://localhost:${SERVER_PORT.toString()}`,
  );
});
