const fs = require('fs');
const path = require('path');
const rutaAbsoluta='../views/';
const bcrypt=require('bcrypt');
let db = require('../database/models');

const controller = {
		// Root - Show all products
		index: (req, res) => {
			
			
			
			db.products.findAll({
				include: ['categories']
        	})
			.then((products)=>{
				const htmlPath=path.resolve(__dirname,rutaAbsoluta+'home');
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
			const htmlPath=path.resolve(__dirname,rutaAbsoluta+'about');
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
			const htmlPath=path.resolve(__dirname,rutaAbsoluta+'contact');
			res.render(htmlPath);
		},
		login:(req,res)=>{
			const htmlPath=path.resolve(__dirname,rutaAbsoluta+'login');
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
				const htmlPath = path.resolve(__dirname, rutaAbsoluta + 'login');
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
			const htmlPath=path.resolve(__dirname,rutaAbsoluta+'shop');
			let id = req.params.id
			db.products.findByPk(id)
			.then((producto)=>{
				console.log(producto)
				res.render(htmlPath, {producto
					})
			 })
			 .catch(error => res.send(error))
		},
		catalogue: (req, res) => {
			
			
			
			db.products.findAll({
				include: ['categories']
        	})
			.then((products)=>{
				const htmlPath=path.resolve(__dirname,rutaAbsoluta+'catalogue');
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
	}
;

module.exports = controller;
