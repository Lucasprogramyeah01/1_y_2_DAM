CREATE DATABASE tribici;

-- a)

CREATE TABLE usuarios (
	dni 			 	VARCHAR(10),
	nombre 			 	VARCHAR(100) NOT NULL,
	apellidos 		 	VARCHAR(200) NOT NULL,
	dirección 		 	VARCHAR(300),
	teléfono 			VARCHAR(20) NOT NULL,
	email 			 	VARCHAR(255) NOT NULL,
	passw				CHAR(8),
	saldo_disponible 	NUMERIC NOT NULL DEFAULT 0,
	CONSTRAINT pk_usuarios PRIMARY KEY (dni)
);

CREATE TABLE estaciones (
	cod_estacion	VARCHAR(150),
	num_estacion	SERIAL NOT NULL,
	direccion		VARCHAR(300),
	latitud			NUMERIC NOT NULL,
	longitud		NUMERIC NOT NULL,
	CONSTRAINT pk_estaciones PRIMARY KEY (cod_estacion)
);

CREATE TABLE bicicletas (
	cod_bicicleta	SERIAL,
	marca			VARCHAR(150) NOT NULL,
	modelo			VARCHAR(200) NOT NULL,
	fecha_alta		DATE NOT NULL,
	CONSTRAINT pk_bicicletas PRIMARY KEY (cod_bicicleta)
);

CREATE TABLE uso (
	estacion_salida		VARCHAR(300),
	fecha_salida		TIMESTAMP,
	dni_usuario			VARCHAR(10),
	cod_bicicleta		INTEGER,
	estacion_llegada	VARCHAR(300),
	fecha_llegada		TIMESTAMP NOT NULL,
	CONSTRAINT pk_uso PRIMARY KEY (estacion_salida, fecha_salida, 
		dni_usuario, cod_bicicleta, estacion_llegada)
);

ALTER TABLE uso
ADD CONSTRAINT fk_uso_estaciones_sal FOREIGN KEY (estacion_salida) REFERENCES estaciones,
ADD CONSTRAINT fk_uso_usuarios FOREIGN KEY (dni_usuario) REFERENCES usuarios,
ADD CONSTRAINT fk_uso_bicicletas FOREIGN KEY (cod_bicicleta) REFERENCES bicicletas,
ADD CONSTRAINT fk_uso_estaciones_lleg FOREIGN KEY (estacion_llegada) REFERENCES estaciones;

-- b)

ALTER TABLE usuarios
ADD COLUMN fecha_baja DATE;

-- c)

	-- Lo he intentado, pero no he sabido hacerlo.
