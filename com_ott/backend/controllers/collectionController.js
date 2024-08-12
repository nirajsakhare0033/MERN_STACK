const mongoose = require("mongoose");
const Collection = require("../models/collection");

const allCollection = async (req, res) => {
  const id = req.user._id;
  try {
    const collection = await Collection.find({ userId: id }).sort({
      createdAt: -1,
    });
    res.status(200).json({ collection });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addCollection = async (req, res) => {
  const { mediaId, title, mediaType, saveType, userId } = req.body;

  try {
    const singleItem = await Collection.create({
      mediaId,
      title,
      mediaType,
      saveType,
      userId,
    });
    res.status(200).json({ singleItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCollection = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid collection." });
  }

  try {
    const singleItem = await Collection.findOneAndDelete({ _id: id });
    res.status(200).json({ singleItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { allCollection, addCollection, deleteCollection };
