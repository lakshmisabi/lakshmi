var movies = require('./movieData');
var dbService = require("../services/dbServices");

exports.getAllMovies = function(req,res, next){
  var db = dbService.database;
  //console.log("db");
  var moviesCollection = db.collection("movies");

  moviesCollection.find().toArray().then(function(result){
    var outputJSON = {
      "isSuccess" : true,
      "data": result
    }
    return res.json(outputJSON)
  });

};

exports.addNewMovie = function(req,res,next){
  var db = dbService.database;
  var movie = req.body;
  moviesCollection = db.collection("movies");
  console.log("movies");
  moviesCollection.insert(movie).then(function(save_data){
    return res.json({
      "isSuccess":true
    });
  });

}
