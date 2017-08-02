/*Defining schema*/
var mongoose = require('mongoose');
var reviewSchema = new mongoose.Schema({
     name : String,
     comment : String,
     createdOn :{type:Date,default:Date.now},
     rating:{type:[Number],min:0,max:5,required:true}
})
var locationSchema = new mongoose.Schema({
      name : {type:String, required:true},
      address : String,
      rating : {type:Number,"default" : 0, min:0,max:5},
      facilities : [String],
      coords:{type:[Number],index:'2dsphere'},
      users:[reviewSchema]
});
mongoose.model('Location',locationSchema)
