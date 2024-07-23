const User = require("./model");
const { ValidationError } = require("sequelize");

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

module.exports = {
  signup,
};
