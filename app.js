let bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    expresSanitizer = require('express-sanitizer'),
    mongoose       = require('mongoose'),
    express        = require('express'),
    app            = express()
;

//App Config
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expresSanitizer());
app.use(express.static('public'));
app.set('view engine','ejs');

let Challenge = require("./modules/challenge");


//RESTful routes
/* INDEX */
app.get("/challenges", function(req, res){

    Challenge.find({},function(err , challenges){
        if(err){
            console.log(err);
        }else{
            res.render('index',{challenges : challenges});
        }
    })
});

/*NEW */
app.get("/challenges/new",function(req , res){
    //res.render('new');
    res.send("Create new challenges!");
});
/*CREATE */
app.post("/challenges",function(req , res){
    res.send("Show new challenges!");
    
});

/*SHOW */
app.get("/challenges/:id",function(req , res){
    res.send("Show specific challenge!");
    
});

/* EDIT */
app.get("/challenges/:id/edit",function(req , res){
    res.send("Edit specific challenge!");
});

/*UPDATE */
app.put("/challenges/:id",function(req , res){
    res.send("Update specific challenge!");

});

/*DESTROY */
app.delete('/challenges/:id',function(req ,res){
    Challenge.findByIdAndRemove(req.params.id ,function(err){

        if(!err){
            res.send("Challenge destroyed");
        }
    });

    
});

//Starting the server 
let port = 8080;
let hostname = "localhost";
app.listen(port , hostname , function(){
    console.log("Server has started successfuly !");
})