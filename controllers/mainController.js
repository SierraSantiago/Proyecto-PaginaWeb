const fs = require('fs');
const path = require('path');
const rutaAbsoluta='../views/';


const controller = {
		// Root - Show all products
		index: (req, res) => {
			const htmlPath=path.resolve(__dirname,rutaAbsoluta+'home');
			res.render(htmlPath)
			/*
			db.products.findAll({
				include: ['categories']
        	})
			.then((products)=>{
				console.log(products);
				res.render(htmlPath, {
					products,
				
					user:req.session.userLogged
			})
		 })
		 	.catch(error => res.send(error))
			*/	
		}
		 

			
		}
;

module.exports = controller;
