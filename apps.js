var express = require("express");
var app = express();

app.set("view engine", "ejs");

//landing page route
//looks in views/landing.ejs
app.get("/", function(req, res){
   //res.send("this will be the landing page soon!");
   //I can leave off the .ejs b/c of the app.set("view engine", "ejs") line
   res.render("landing"); 
});

//campground route that lists all the campgrounds
//looks in views/campgrounds.ejs
app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://thumb1.shutterstock.com/display_pic_with_logo/88506/302683349/stock-photo-vacation-holidays-background-wallpaper-two-beach-lounge-chairs-under-tent-on-beach-sihanoukville-302683349.jpg"},
        {name: "Granite Hill", image: "https://thumb7.shutterstock.com/display_pic_with_logo/751771/643472131/stock-photo-beautiful-beach-with-palm-trees-and-moody-sky-summer-vacation-travel-holiday-background-concept-643472131.jpg"},
        {name: "Mountain Goat's Rest", image: "https://thumb1.shutterstock.com/display_pic_with_logo/1989926/429189436/stock-photo-silhouette-of-surfer-people-carrying-their-surfboard-on-sunset-beach-vintage-filter-effect-with-429189436.jpg"}
    ]
    
    //passes an object all of the data we want to pass through
    //2nd arg pass the data, 1st arg is what we named it; common to see them named the same thing
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("the yelpcamp server has started!");
});