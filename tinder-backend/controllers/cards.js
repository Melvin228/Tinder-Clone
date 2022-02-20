const { db } = require("../models/dbCard");
const dbCard = require("../models/dbCard");

exports.getCards = async (req, res) => {
  const result = await dbCard.find();

  if (result) {
    return res.status(200).json(result);
  }

  return res.status(500).json({ message: "Could not find the result" });
};

exports.createCard = async (req, res) => {
  const card = req.body;
  dbCard.create(card, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

exports.updateCard = async (req, res) => {
  const { id } = req.params;
  const card = req.body;

  await dbCard.findOneAndUpdate({ cardId: id }, { $set: card }, (err, doc) => {
    if (err) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.status(200).json({ status: "Success", message: "Updated" });
  });
};

exports.deleteCard = async (req, res) => {
  const { id } = req.params;

  const card = await dbCard.findOne({ cardId: id });

  if (card) {
    const result = await dbCard.remove(card);

    if (result) {
      return res.status(204).json({});
    }
  }

  return res.status(404).json({ message: "Not found" });
};
