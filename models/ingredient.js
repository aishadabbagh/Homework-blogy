//moongoose is responsibe for the schema
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


const ingredientSchema = new Schema({
    name:{ type: String, default: ''},
    origin: {type: String, default: ''}
},
//to display the time
{timestamps: true});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;  