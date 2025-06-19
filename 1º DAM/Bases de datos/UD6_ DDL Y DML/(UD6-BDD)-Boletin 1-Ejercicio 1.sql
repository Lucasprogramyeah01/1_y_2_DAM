CREATE DATABASE libreria;

CREATE TABLE libro (
	isbn VARCHAR(15),
	titulo VARCHAR(200) NOT NULL,
	dni_autor VARCHAR(15) NOT NULL,
	cod_genero INTEGER NOT NULL,
	cod_editorial INTEGER NOT NULL,
	CONSTRAINT pk_libro 
		PRIMARY KEY (isbn)
);

CREATE TABLE autor (
	dni VARCHAR(15),
	nombre VARCHAR(300) NOT NULL,
	nacionalidad VARCHAR(100),
	CONSTRAINT pk_autor 
		PRIMARY KEY (dni)
);

CREATE TABLE editorial (
	cod_editorial SERIAL,
	nombre VARCHAR(300) NOT NULL,
	direccion VARCHAR(300),
	poblacion VARCHAR(200),
	CONSTRAINT pk_editorial 
		PRIMARY KEY (cod_editorial)
);

CREATE TABLE genero (
	id_genero SERIAL,
	nombre VARCHAR(200) NOT NULL,
	descripcion VARCHAR(2000),
	CONSTRAINT pk_genero
		PRIMARY KEY (id_genero)
);

CREATE TABLE edicion (
	isbn VARCHAR(15),
	fecha_publicacion DATE,
	cantidad INTEGER,
	CONSTRAINT pk_edicion 
		PRIMARY KEY (isbn, fecha_publicacion),
	CONSTRAINT cantidad_positiva CHECK (cantidad>0)
);