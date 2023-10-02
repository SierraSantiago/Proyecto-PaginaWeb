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
/*
router.get('/carrito',mainController.carrito);
router.get('/ayuda',mainController.ayuda);
*/
module.exports=router;