let Item = require("mongoose").model("Item");

class ItemController{
	root(req,res){
		return res.render("Item",{});
	}

	all(req,res){
		Item.find({},(err,data)=>{
			if(data){
				return res.status(200).json(data);
			}else{
				return res.status(404).json({errors:"Failed to retrieve items!"});
			}
		})
	}

	findById(req,res){
		Item.findOne({_id:req.params.id},(err,data)=>{
			if(data){
				return res.status(200).json(data);
			}else{
				return res.status(404).json({errors:"Failed to retrieve item!"});
			}
		})
	}

	create(req,res){
		let item = new Item(req.body);

		item.save((err)=>{
			if(err){
				return res.status(403).json({errors:item.errors});
			}else{
				return res.status(200).json(item);
			}
		});
	}

	update(req,res){
		Item.findOne({_id:req.params.id},(err,item)=>{
			if(err){
				return res.json({errors:err});
			}else{
				// item.title = req.body.title;
				// item.description = req.body.description;

				item.save(err=>{
					if(err){
						return res.status(403).json({errors:err});
					}else{
						return res.status(200).json(item);
					}
				});
			}
		});
	}

	destroy(req,res){
		Item.findOne({_id:req.params.id},(err,item)=>{
			if(item){
				Item.remove({_id:req.params.id},(e)=>{
					if(e){
						return res.status(404).json({errors:"Failed to remove item."});
					}else{
						return res.status(200).json(item);
					}
				});
			}else{
				return res.status(404).json({errors:err});
			}
		});
	}
}
module.exports = new ItemController();