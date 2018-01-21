var MongoClient = require('mongodb').MongoClient;

exports.createConnection =function(){
  MongoClient.connect("mongodb://lakshmipriya:lakshmipriya@ds047325.mlab.com:47325/projectorapp").then(function(client){
  console.log("connected to the database");
  exports.database = client.db('projectorapp');

});

}
