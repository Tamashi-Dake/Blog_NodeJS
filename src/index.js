import * as path from "path";
import express from "express";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";

// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);

import routes from './routes/routes.js'

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

// route init
routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
