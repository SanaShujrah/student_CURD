const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let StudentSchema = new Schema({
    name: {type: String, required: true, max: 100},
    grade: {type: String, required: true}});
    // Export the model     (model has to start with a capital letter in this case Product)
    module.exports = mongoose.model('Student', StudentSchema);
