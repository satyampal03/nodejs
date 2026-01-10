const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("hey dear this is me✔️");
});

app.get("/call", function (req, res) {
  res.send("new page rendered✔️");
});
app.get("/order", function (req, res) {
  var customized_idli = {
    name: "rava idli",
    size: "10 cm diameter",
    is_sambhar: true,
    is_chutney: false,
  };

  res.send(customized_idli);
});

app.listen(30, () => {
  console.log("server is on prot num- 30");
});
