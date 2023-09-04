import * as path from "path";
import express from "express";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);

// tạo trang tĩnh , set default về public
app.use(express.static("src/public"));

// middleware
// nếu gửi bằng submit form
app.use(express.urlencoded({
  encoded:true
}))
// nếu gửi bằng thư viện: XMLHttpRequest, axios, fetch
app.use(express.json())

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
app.get("/search", (req, res) => {
  // will use query params later
  res.render("search", { title: "not done yet" });
});
app.get("/kill-me", (req, res) => {
  res.render("partials/kill-me", { title: "plz K me ( ._.)" });
});

// nếu query parameter -> .query
// nếu Form data ->   .body


// nếu dùng POST -> định nghĩa route dùng post
app.post("/search", (req, res) => {
  res.send('')
  res.render("search", { title: "not done yet" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
