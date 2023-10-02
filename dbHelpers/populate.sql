USE `so_active`;
DELETE FROM `products`;
ALTER TABLE `products` AUTO_INCREMENT = 1;
DELETE FROM `users`;
ALTER TABLE `users` AUTO_INCREMENT = 1;
DELETE FROM `rols`;
ALTER TABLE `rols` AUTO_INCREMENT = 1;
DELETE FROM `categories`;
ALTER TABLE `categories` AUTO_INCREMENT = 1;

INSERT INTO `rols` (idRol, roleType) VALUES
(default, "admin"), (default, "cliente");


INSERT INTO `categories` (idCategorie, name) VALUES
(default, "leggins"), (default, "top"), (default, "biker");


INSERT INTO `products` (idProduct, name, description, image, price, categorieId) VALUES
(default, "Top deportivo", "color rojo", "archivo.png", 25000, 2),
(default, "Ocean Short", "Color Oceano", "archivo.png", 14000, 3);


INSERT INTO `users` (idUser, name, email, image, password, rolId) VALUES
(default, "mantonia", "mantonia@gmail.com", "archivo.png", "1234", 1),
(default, "ssierra", "ssierra@gmail.com", "archivo.png", "1234", 2)
