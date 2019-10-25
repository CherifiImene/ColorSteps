let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/color_steps",{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false});

let challengeSchema = mongoose.Schema({
    name : String,
    question: String,
    image : {type: String , default : null},
    possibilities: [String],
    answer: String
});

module.exports = mongoose.model("Challenge",challengeSchema);
