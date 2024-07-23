const bcrypt = require("bcrypt");
const User = require("../users/model");
const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPass = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    req.body.password = hashedPassword;

    next();
  } catch (err) {
    res.status(500).json({ message: err.message, err });
  }
};

module.exports = {
  hashPass,
};
