CREATE DATABASE teatro;

--a)

CREATE TABLE invitado (
	nroInvitado SERIAL,
	nombre VARCHAR(200),
	categoria VARCHAR (200),
	origen VARCHAR(200),
	CONSTRAINT pk_invitado PRIMARY KEY (nroInvitado)
);

CREATE TABLE teatro (
	codTeat SERIAL,
	nombre VARCHAR(300),
	direccion VARCHAR(300),
	cantAsientos INTEGER,
	CONSTRAINT pk_teatro PRIMARY KEY (codTeat)
);

CREATE TABLE obra (
	codObra SERIAL,
	nombreObra VARCHAR(200),
	autor VARCHAR(300),
	CONSTRAINT pk_obra PRIMARY KEY (codObra)
);

CREATE TABLE exhibe (
	codTeat SERIAL,
	fecha DATE,
	codObra SERIAL,
	CONSTRAINT pk_exhibe PRIMARY KEY (codTeat, fecha)
);

CREATE TABLE tipo_asiento (
	tipo VARCHAR(100),
	nombre VARCHAR(300),
	descripcion VARCHAR(300),
	CONSTRAINT pk_tipo_asiento PRIMARY KEY (tipo)
);

CREATE TABLE asiento_tipo (
	nroAsiento INTEGER,
	tipo VARCHAR(100),
	CONSTRAINT pk_asiento_tipo PRIMARY KEY (nroAsiento)
);

CREATE TABLE precio (
	codTeat SERIAL,
	fecha DATE,
	tipo VARCHAR(100),
	precio NUMERIC,
	CONSTRAINT pk_precio PRIMARY KEY (codTeat, fecha, tipo)
);

CREATE TABLE entrada (
	codTeat SERIAL,
	fecha DATE,
	nroAsiento INTEGER,
	nroInvit SERIAL,
	CONSTRAINT pk_entrada PRIMARY KEY (codTeat, fecha, nroAsiento)
);

--b)

ALTER TABLE exhibe
ADD CONSTRAINT fk_exhibe_teatro FOREIGN KEY (codTeat) REFERENCES teatro,
ADD CONSTRAINT fk_exhibe_obra FOREIGN KEY (codObra) REFERENCES obra;

ALTER TABLE asiento_tipo 
ADD CONSTRAINT fk_asiento_tipo_tipo_asiento FOREIGN KEY (tipo) REFERENCES tipo_asiento;

ALTER TABLE precio
ADD CONSTRAINT fk_precio_exhibe FOREIGN KEY (codTeat, fecha) REFERENCES exhibe,
ADD CONSTRAINT fk_precio_tipo_asiento FOREIGN KEY (tipo) REFERENCES tipo_asiento;

ALTER TABLE entrada
ADD CONSTRAINT fk_entrada_exhibe FOREIGN KEY (codTeat, fecha) REFERENCES exhibe,
ADD CONSTRAINT fk_entrada_asiento_tipo FOREIGN KEY (nroAsiento) REFERENCES asiento_tipo,
ADD CONSTRAINT fk_entrada_invitado FOREIGN KEY (nroInvit) REFERENCES invitado;
