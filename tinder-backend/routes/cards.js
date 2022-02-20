const express = require("express");
const cardController = require("../controllers/cards");

const router = express.Router();

router.get("/cards", cardController.getCards);

router.post("/card", cardController.createCard);

router
  .route("/card/:id")
  .patch(cardController.updateCard)
  .delete(cardController.deleteCard);

module.exports = router;
