const mongoose = require('mongoose');

//for list of emails share data with and list that have shared with them
const fileSchema = mongoose.Schema(
  {
    ownerEmail: {
      type: String,
      required: true,
      trim: true
    },
    boxArray: [String],
    emailArray: [String],
    shareArray: [String]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('emailGroup', fileSchema);