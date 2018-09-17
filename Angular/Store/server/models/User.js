const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.model('User',new mongoose.Schema({
	fname:{type:String,required:true,minlength:1,maxlength:15},
	lname:{type:String,required:true,minlength:1,maxlength:15},
	email:{type:String,required:true},
	password: { type: String, required: true, minlength: 8 },
    confirm: { type: String, required: false, minlength: 8 },
	item:{type:ObjectId,ref:"User"}
},{timestamps:true}));


listings: [{ type: ObjectId, ref: 'Listing' }]
},
{ timestamps: true }