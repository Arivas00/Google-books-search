const router = require("express").Router();
const booksAPIController = require("../../controllers/booksAPIController");

router
  .route("/")
  .get(booksAPIController.findAll)
  .post(booksAPIController.create);

router
  .route("/:id")
  .get(booksAPIController.findById)
  .put(booksAPIController.update)
  .delete(booksAPIController.remove);

module.exports = router;