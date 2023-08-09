import express from "express";
import cors from "cors";
import asmaulHusna from "./asmaulHusna.js";

const app = express();
const PORT = 3002;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "ready",
    route: "/asmaul-husna",
    repository: "https://github.com/wajik45/asmaul-husna-api",
  });
});

app.get("/asmaul-husna", (req, res) => {
  res.json(asmaulHusna);
});

app.listen(PORT, () => {
  console.log(`SERVER BERJALAN DI http://localhost:${PORT}`);
});
