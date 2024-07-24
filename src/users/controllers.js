const User = require("./model");
const { ValidationError } = require("sequelize");
const fetchUnsplash = require("../unsplash/fetchUnsplash");

const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      message: "You have signed up successfully",
      user: { username: user.username },
    });
  } catch (err) {
    if (err instanceof ValidationError) {
      res.status(400).json({ message: "Validation error", error: err.errors });
    } else {
      res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  }
};

const login = async (req, res) => {
  try {
    const user = {
      id: req.user.id,
      username: req.user.username,
    };
    res.status(201).json({
      message: "You have logged in successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, err: err });
  }
};

const getPhotos = async (req, res) => {
  try {
    const photos = await fetchUnsplash();
    res.json(photos);
  } catch (err) {
    console.log("Error fetching photos:", err);
    res.status(500).json({ err: "Failed to fetch photos" });
  }
};

module.exports = {
  signup,
  login,
  getPhotos,
};
