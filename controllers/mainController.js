const fs = require('fs');
const path = require('path');
const rutaAbsoluta='../views/';
const bcrypt=require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
let db = require('../database/models');

const controller = {
		// Root - Show all products
		index: (req, res) => {
			
			
			
			db.products.findAll({
				limit: 3
        	})
			.then((products)=>{
				const htmlPath=path.resolve(__dirname,rutaAbsoluta+'home1');
				console.log(products);
				res.render(htmlPath, {
					products,
					//user:req.session.userLogged
			})
		 })
		 	.catch(error => {
				res.send(error)
				console.log("Error ");
			})
			
		},

		about:(req,res)=>{
			const htmlPath=path.resolve(__dirname,rutaAbsoluta+'about1');
			res.render(htmlPath);
		},

		shop: (req,res)=>{

			db.products.findAll({
				include: ['categories']
        	})
			.then((products)=>{
				const htmlPath=path.resolve(__dirname,rutaAbsoluta+'shop');
				console.log(products);
				res.render(htmlPath, {
					products,
					//user:req.session.userLogged
			})
		 })
		 	.catch(error => {
				res.send(error)
				console.log("Error ");
			})
			
		},

		contact: (req,res)=>{
			const htmlPath=path.resolve(__dirname,rutaAbsoluta+'contact1');
			res.render(htmlPath);
		},
		login:(req,res)=>{
			const htmlPath=path.resolve(__dirname,rutaAbsoluta+'login1');
			res.render(htmlPath, {errors:{msg:null}});
		},
		save: (req, res) => {

			
			
			
			
			console.log(req.body);
			
			let { nombre, email,  password } = req.body;

			const hashSync= bcrypt.hashSync(password,10);
			
			
				
				let newUsers = {
					
					name: nombre, email: email, rolId: 2, password: hashSync,
					image: ""
				};
				console.log(newUsers);
				db.users.create(
					newUsers
				).then(() => {
					return res.redirect('/home')
				})
					.catch(error => res.send(error))
			
			
		},
		login2: (req, res) => {
			let { email, password } = req.body;
			
			console.log(email, password);
			db.users.findOne({
				where: {
					email: email
				}
			}).then((user) => {
				console.log(user);
				const htmlPath = path.resolve(__dirname, rutaAbsoluta + 'login1');
				if (user != null) {
					if (bcrypt.compareSync(password,user.password)) {
						console.log('Todo correcto puede seguir :D');
						user.password = "";
						return res.redirect('/home')
					}
					else {
						console.log('error no entro :(');
						
						return res.render(htmlPath, {
							errors: {
								msg: "datos erroneos"
							}
						});
					}
				}
				else {
					console.log('error no entro :(');
					
					return res.render(htmlPath, {
						errors: {
							msg: "datos erroneos"
						}
					});
				}
			});
	
	
		},
		detail : (req,res)=>{
			const htmlPath=path.resolve(__dirname,rutaAbsoluta+'shop1');
			let id = req.params.id
			db.products.findByPk(id)
			.then((products)=>{
				console.log(products)
				res.render(htmlPath, {products
					})
			 })
			 .catch(error => res.send(error))
		},
		catalogue: (req, res) => {
			
			
			
			db.products.findAll({
				include: ['categories']
        	})
			.then((products)=>{
				const htmlPath=path.resolve(__dirname,rutaAbsoluta+'catalogue1');
				console.log(products);
				res.render(htmlPath, {
					products,
					//user:req.session.userLogged
			})
		 })
		 	.catch(error => {
				res.send(error)
				console.log("Error ");
			})
			
		},
		favorites: (req, res) => {
			
			
			
			db.products.findAll({
				where:  {
					favorito: 1
				  }
        	})
			.then((products)=>{
				const htmlPath=path.resolve(__dirname,rutaAbsoluta+'favoritos');
				console.log(products);
				res.render(htmlPath, {
					products,
					//user:req.session.userLogged
			})
		 })
		 	.catch(error => {
				res.send(error)
				console.log("Error ");
			})
			
		},
		
		isFavorite: (req, res) => {

			let id = req.params.id;
			db.products.update({
				favorito:1 
			},
			{where:{idProduct:id} }).then(()=>{
				return res.redirect('/catalogue')
		 })
		 	.catch(error => {
				res.send(error)
				console.log("Error ");
			})
			
		},
		notFavorite: (req, res) => {

			let id = req.params.id;
			db.products.update({
				favorito:0
			},
			{where:{idProduct:id} }).then(()=>{
				return res.redirect('/favorites')
		 })
		 	.catch(error => {
				res.send(error)
				console.log("Error ");
			})
			
		},
		enCarrito: async (req, res) => {
			
			
			
			db.products.findAll({
				where:  {
					carrito:1
				  }
        	})
			.then((products)=>{
				const sumaPrecios = products.reduce((total, product) => total + parseFloat(product.price) , 0);
				const htmlPath=path.resolve(__dirname,rutaAbsoluta+'carrito');
				console.log(products);
				res.render(htmlPath, {
					products, sumaPrecios
					//user:req.session.userLogged
			})
		 })
		 	.catch(error => {
				res.send(error)
				console.log("Error ");
			})
			
		},
		isCarrito: (req, res) => {

			let id = req.params.id;
			console.log("Entra a en carrito",id);	
			db.products.update({
				carrito:1 
			},
			{where:{idProduct:id} }).then(()=>{
				return res.redirect('/catalogue')
		 })
		 	.catch(error => {
				res.send(error)
				console.log("Error ");
			})
			
		},
		notCarrito: (req, res) => {

			let id = req.params.id;
			db.products.update({
				carrito:0
			},
			{where:{idProduct:id} }).then(()=>{
				return res.redirect('/catalogue')
		 })
		 	.catch(error => {
				res.send(error)
				console.log("Error ");
			})
			
		},
		editSize: (req, res) => {

			let id = req.params.id;
			let size= req.params.size;
			console.log(id, size)
			db.products.update({
				size:size
			},
			{where:{idProduct:id} }).then(()=>{
				return res.redirect('/catalogue')
		 })
		 	.catch(error => {
				res.send(error)
				console.log("Error ");
			})
			
		},
		perfil: (req,res)=>{
			const htmlPath=path.resolve(__dirname,rutaAbsoluta+'perfil');
			res.render(htmlPath);
		},
	}
;

module.exports = controller;
