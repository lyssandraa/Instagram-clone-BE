const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Fave = sequelize.define(
  "Fave",
  {
    imageId: {
      type: DataTypes.STRING,
    },
    imageUrls: {
      type: DataTypes.JSON,
    },
    likes: {
      type: DataTypes.INTEGER,
    },
    photographer_name: {
      type: DataTypes.STRING,
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  { timestamps: false }
);

module.exports = Fave;
