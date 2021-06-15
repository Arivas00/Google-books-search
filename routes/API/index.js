const router = require("express").Router();
const bookAPIRoutes = require("./booksAPI");
const googleRoutes = require("./google");

router.use("/booksAPI", bookAPIRoutes);

router.use("/google", googleRoutes);

module.exports = router;