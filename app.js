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

app.get("/",function(req , res){
    res.render("colorSteps");
})
/* INDEX */
app.get("/challenges", function(req, res){

    Challenge.find({},function(err , challenges){
        if(err){
            console.log(err);
        }else{
            res.render('classroom',{challenges : challenges});
        }
    });
});

/*NEW */
app.get("/challenges/new",function(req , res){
    res.render("newChallenge");
});
/*CREATE */
app.post("/challenges",function(req , res){
    Challenge.create(req.body.challenge,function(err , challenge){
        if(err){
            res.render("/newChallenge");
        }else{
            res.redirect("/challeneges");
        }
    });
    
});

/*SHOW */
app.get("/challenges/:id",function(req , res){
    Challenge.findById(req.params.id,function(err , challenge){

    if(err){
        res.redirect("/challenges");
    }else{
        res.render("showChallenge",{challenge : challenge});
    }
    });
    
});

/* EDIT */
app.get("/challenges/:id/edit",function(req , res){
    Challenge.findById(req.blog.id,function(err , challenge){
        if(err){
            res.redirect("/challenges/"+challenge._id);
        }else{
            res.render("editChallenge",{challenge : challenge});
        }
    })
});

/*UPDATE */
app.put("/challenges/:id",function(req , res){
    Challenge.findByIdAndUpdate(req.params.id,function(err , challenge){
        if(err){
            res.redirect("/challenges");
        }else{
            res.render("showChallenge",{challenge : challenge});
        }

    });

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