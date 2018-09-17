let mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model('MeanBE',new mongoose.Schema({
	title:{type:String,required:true,minlength:1,maxlength:255},
	description:{type:String,required:true,minlength:1,maxlength:255},
	// user:{type:ObjectId,ref:"User"}
},{timestamps:true}));