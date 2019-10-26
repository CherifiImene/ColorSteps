let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/color_steps",{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false});

let challengeSchema = mongoose.Schema({
    name : String,
    challengeType: String,
    level : String,
    space : String,
    time : Number,
    purpose : String,
    teamSize : Number,
    needs : String,
    instructions: [String],
    completed : {type: Boolean , default: false}
});

module.exports = mongoose.model("Challenge",challengeSchema);
