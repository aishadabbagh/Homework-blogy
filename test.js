const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Food = require('./models/food');
const Ingredient = require('./models/ingredient');

const mongoURI = 'mongodb://localhost/mongoRelationships';
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
  console.log('the connection with mongod is established');
});
// Food.findOne({}).exec((error, food) => {
//     console.log(food);
// })

//invoked from food from food schema
Food.findOne({}).populate('ingredients').exec((error,food) => {
console.log(food);
});