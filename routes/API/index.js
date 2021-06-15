const router = require("express").Router();
const bookAPIRoutes = require("./booksAPI");

router.use("/booksAPI", bookAPIRoutes);


module.exports = router;