import * as path from "path";
import express from "express";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);

// template engine
app.engine(
  "handlebars",
  engine({
    // config handlebars in here, gonna try later
  })
);
app.set("view engine", "handlebars");
// đang dùng view default ở ngoài của express, cần custom thêm
// console.log(__filename);
// app.set("views", path.join(__filename, "view"));

app.get("/", (req, res) => {
  res.render("home", { title: "not done yet" });
});

app.get("/kill-me", (req, res) => {
  res.render("partials/kill-me", { title: "plz K me ( ._.)" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
