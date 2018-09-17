let MeanBE = require("mongoose").model("MeanBE");

class MeanBEController{
	root(req,res){
		return res.render("MeanBE",{});
	}

	all(req,res){
		MeanBE.find({},(err,data)=>{
			if(data){
				return res.status(200).json(data);
			}else{
				return res.status(404).json({errors:"Failed to retrieve meanBEs!"});
			}
		})
	}

	findById(req,res){
		MeanBE.findOne({_id:req.params.id},(err,data)=>{
			if(data){
				return res.status(200).json(data);
			}else{
				return res.status(404).json({errors:"Failed to retrieve meanBE!"});
			}
		})
	}

	create(req,res){
		let meanBE = new MeanBE(req.body);

		meanBE.save((err)=>{
			if(err){
				return res.status(403).json({errors:meanBE.errors});
			}else{
				return res.status(200).json(meanBE);
			}
		});
	}

	update(req,res){
		MeanBE.findOne({_id:req.params.id},(err,meanBE)=>{
			if(err){
				return res.json({errors:err});
			}else{
				// meanBE.title = req.body.title;
				// meanBE.description = req.body.description;

				meanBE.save(err=>{
					if(err){
						return res.status(403).json({errors:err});
					}else{
						return res.status(200).json(meanBE);
					}
				});
			}
		});
	}

	destroy(req,res){
		MeanBE.findOne({_id:req.params.id},(err,meanBE)=>{
			if(meanBE){
				MeanBE.remove({_id:req.params.id},(e)=>{
					if(e){
						return res.status(404).json({errors:"Failed to remove meanBE."});
					}else{
						return res.status(200).json(meanBE);
					}
				});
			}else{
				return res.status(404).json({errors:err});
			}
		});
	}
}
module.exports = new MeanBEController();