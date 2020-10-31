const PORT = process.env.PORT || 4444;
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const products = require("./products.json");

app.use(express.static("public"));
app.set("view engine", "hbs");
//instead of app.engine('handlebars', handlebars({
app.engine(
  "hbs",
  handlebars({
    // layoutsDir: __dirname + "/views/layouts",
    // new configuration parameter,
    extname: "hbs",
  })
);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/products", (req, res) => {
  res.render("products", { products });
});

app.get("/product/:productId", (req, res) => {
  const product = products.find((p) => p.id == req.params.productId);

  res.render("product", { product });
});

app.listen(PORT, () => {
  console.log(`App serer is running 4444`);
});
