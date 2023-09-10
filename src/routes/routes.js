function routes(app) {
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
    res.send("");
    res.render("search", { title: "not done yet" });
  });
}

module.exports = routes;
