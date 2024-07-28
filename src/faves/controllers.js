const Fave = require("./model");
const User = require("../users/model");

const addFave = async (req, res) => {
  try {
    const fave = await Fave.create({
      imageId: req.body.imageId,
      imageUrls: req.body.imageUrls,
      likes: req.body.likes,
      photographer_name: req.body.photographer_name,
      UserId: req.body.userId,
    });
    res.status(201).json({ message: "Photo added to favourite", fave });
  } catch (err) {
    res.status(500).json({ message: err.message, err: err });
  }
};

const getFaves = async (req, res) => {
  try {
    const faves = await Fave.findAll({ where: { UserId: req.query.userId } });
    res.status(200).json({ message: "success", faves });
  } catch (err) {
    res.status(500).json({ message: err.message, err: err });
  }
};

module.exports = {
  addFave,
  getFaves,
};
