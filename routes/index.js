var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();
var con = mongoose.connect("mongodb://mongodb/test");
var Schema = mongoose.Schema;
  
    var bugSchema = new Schema({
        bugName: String,
        bugColour: String,
        Genus: String
    });
 
    var Bug = mongoose.model("Bug", bugSchema);

/* GET home page. */
router.get('/', function(req, res, next) {

  //con.then(() => {
    
 
    var Bee = new Bug({
        bugName: "Scruffy",
        bugColour: "Orange",
        Genus: "Bombus"
    });
 
    Bee.save(function(error) {
      //console.log("Your bee has been saved!");
    });

    res.render('index', { title: 'Express 1 running' + new Date().toTimeString() });
  //}).catch(()=> { 
  //  res.render('index', { title: 'Express 1 error' + new Date().toTimeString() });
  //});  
});

module.exports = router;
