-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- CREATE TABLE category(
-- id INT NOT NULL auto_increment,
-- category_name VARCHAR(50) NOT NULL,
-- PRIMARY KEY (id)
-- );

--  CREATE TABLE product(
-- id INT NOT NULL auto_increment,
-- product_name VARCHAR(50) NOT NULL,
-- price decimal NOT NULL CHECK (price = numeric),
-- stock INT NOT NULL DEFAULT 10 CHECK (price = numeric),
-- FOREIGN KEY (category_id) REFERENCES category(id),
-- PRIMARY KEY (id)
-- );

-- CREATE TABLE tag(
-- id INT NOT NULL auto_increment,
-- tag_name VARCHAR(50),
-- PRIMARY KEY (id)
-- );

-- CREATE TABLE producttag(
-- id INT NOT NULL auto_increment,
-- FOREIGN KEY (product_id) REFERENCES product(id),
-- foreign key (tag_id) REFERENCES tag(id),
-- PRIMARY KEY (id)
-- );

