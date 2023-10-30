const express = require('express');
const router = express.Router();
const mainController=require('../controllers/mainController');

router.get('/',mainController.login);
router.get('/home',mainController.index);
router.get("/about",mainController.about);
router.get("/shop", mainController.shop);
router.get("/contact", mainController.contact);
router.post("/agregar",mainController.save);
router.get("/agregar",mainController.index);
router.post("/login",mainController.login2);
router.get('/detail/:id',mainController.detail);
router.get('/catalogue',mainController.catalogue);
router.get('/favorites',mainController.favorites);
router.get('/catalogue/:id',mainController.isFavorite);
router.get('/favorite/:id',mainController.notFavorite);
router.get('/carrito',mainController.enCarrito);
router.get('/carrito/:id',mainController.isCarrito);
router.get('/carrito/:id/:size',mainController.editSize);
router.get('/perfil',mainController.perfil);
/*
router.get('/carrito',mainController.carrito);
router.get('/ayuda',mainController.ayuda);
*/
module.exports=router;