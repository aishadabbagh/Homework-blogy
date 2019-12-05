const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    default: "", 
    required: true
  }, // its referred from ingredient.js (types and ObjectId) ==> Because we're using ingredients as reference  send to test and seed
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient'
  }]
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;