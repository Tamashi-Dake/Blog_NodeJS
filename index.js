const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const a = 1;
  const b = 3;
  const c = a + b;
  res.send("Hello madafaka!");
});
app.get("/kill-me", (req, res) => {
  res.send("let me RIP PLZ!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
