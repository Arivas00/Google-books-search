const path = require("path")
const router = require("express").Router();
const bookAPIRoutes = require("./booksAPI");

router.use("/booksAPI", bookAPIRoutes);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;