let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/color_steps",{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false});

let Challenge = require('./challenge');
Challenge.create({
    name: "ShoesChallenge4",
    question : "put 2 different shoes",
    image : "https://basicblogtips.com/wp-content/uploads/2012/02/Blog-Challenge.jpg"
},
function(err , challenge){
    if(!err){
        console.log(challenge);
    }
});
let professorSchema = mongoose.Schema({
    name: String,
    email : String,
    numberOfStudent : Number,
    challenges: [
        {
            type: mongoose.Types.ObjectId,
            ref : "Challenge"
        }
    ]
});

module.exports = mongoose.model("Professor",professorSchema);
