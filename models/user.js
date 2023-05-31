const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    password: {
      type : String,
      required:true,
      min: 6,
      max: 225  
    },
    created_date: {
      type: Date,
      default: Date.now,
    },
    modified_date: {
      type: Date,
      default: null,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("User", postSchema, "user");
