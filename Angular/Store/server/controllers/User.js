let User = require("mongoose").model("User");

class UserController{
	root(req,res){
		return res.render("User",{});
	}

	all(req,res){
		User.find({},(err,data)=>{
			if(data){
				return res.status(200).json(data);
			}else{
				return res.status(404).json({errors:"Failed to retrieve users!"});
			}
		})
	}

	findById(req,res){
		User.findOne({_id:req.params.id},(err,data)=>{
			if(data){
				return res.status(200).json(data);
			}else{
				return res.status(404).json({errors:"Failed to retrieve user!"});
			}
		})
	}

	create(req,res){
		let user = new User(req.body);

		user.save((err)=>{
			if(err){
				return res.status(403).json({errors:user.errors});
			}else{
				return res.status(200).json(user);
			}
		});
	}

	update(req,res){
		User.findOne({_id:req.params.id},(err,user)=>{
			if(err){
				return res.json({errors:err});
			}else{
				// user.title = req.body.title;
				// user.description = req.body.description;

				user.save(err=>{
					if(err){
						return res.status(403).json({errors:err});
					}else{
						return res.status(200).json(user);
					}
				});
			}
		});
	}

	destroy(req,res){
		User.findOne({_id:req.params.id},(err,user)=>{
			if(user){
				User.remove({_id:req.params.id},(e)=>{
					if(e){
						return res.status(404).json({errors:"Failed to remove user."});
					}else{
						return res.status(200).json(user);
					}
				});
			}else{
				return res.status(404).json({errors:err});
			}
		});
	}
}
module.exports = new UserController();