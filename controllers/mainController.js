const fs = require('fs');
const path = require('path');
const rutaAbsoluta='../views/';
const productsFilePath = path.join(__dirname, '../src/data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let db = require('../database/models');

const controller = {
		// Root - Show all products
		index: (req, res) => {
			db.products.findAll({
				include: ['categories']
			})
			.then((products)=>{
				const htmlPath=path.resolve(__dirname,rutaAbsoluta+'home');
			res.render(htmlPath, {
				products
			})
			 })
			 .catch(error => res.send(error))

			
		}
};

module.exports = controller;
