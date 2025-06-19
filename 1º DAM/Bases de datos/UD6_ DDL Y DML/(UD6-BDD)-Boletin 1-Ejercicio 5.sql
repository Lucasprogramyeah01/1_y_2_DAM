CREATE DATABASE academia;

-- CREACIÓN DE TABLAS

CREATE TABLE empresas (
	cif			VARCHAR(10),
	nombre		VARCHAR(200),
	direccion	VARCHAR(200),
	telefono	VARCHAR(13),
	CONSTRAINT pk_empresas PRIMARY KEY (cif)
);

CREATE TABLE alumnos (
	dni			VARCHAR(10),
	nombre		VARCHAR(200),
	direccion	VARCHAR(200),
	telefono	VARCHAR(13),
	edad		SMALLINT,
	empresa		VARCHAR(200),
	CONSTRAINT pk_alumnos PRIMARY KEY (dni)
);

CREATE TABLE alumnos_asisten (
	dni			VARCHAR(10),
	n_concreto	INTEGER,
	CONSTRAINT pk_alumnos_asisten PRIMARY KEY (dni, n_concreto)
);

CREATE TABLE cursos (
	n_concreto		INTEGER,
	fecha_inicio	DATE,
	fecha_fin		DATE,
	dni_profesor	VARCHAR(10),
	tipo_curso		SMALLINT,
	CONSTRAINT pk_cursos PRIMARY KEY (n_concreto)
);

CREATE TABLE profesores (
	dni			VARCHAR(10),
	nombre		VARCHAR(100),
	apellido	VARCHAR(100),
	telefono	VARCHAR(13),
	direccion	VARCHAR(200),
	CONSTRAINT pk_profesores PRIMARY KEY (dni)
);

CREATE TABLE tipos_curso (
	cod_curso	INTEGER,
	duracion	SMALLINT,
	programa	VARCHAR(200),
	titulo		VARCHAR(100),
	CONSTRAINT pk_tipos_curso PRIMARY KEY (cod_curso)
);

-- RESTRICCIONES DE CLAVE EXTERNA

ALTER TABLE alumnos
ADD CONSTRAINT fk_alumnos_empresas FOREIGN KEY (empresa) REFERENCES empresas;

ALTER TABLE alumnos_asisten
ADD CONSTRAINT fk_alumnos_asisten_alumnos FOREIGN KEY (dni) REFERENCES alumnos,
ADD CONSTRAINT fk_alumnos_asisten_cursos FOREIGN KEY (n_concreto) REFERENCES cursos;

ALTER TABLE cursos
ADD CONSTRAINT fk_cursos_profesores FOREIGN KEY (dni_profesor) REFERENCES profesores,
ADD CONSTRAINT fk_cursos_tipos_curso FOREIGN KEY (tipo_curso) REFERENCES tipos_curso;

-- INSERCIÓN DE DATOS

INSERT INTO empresas VALUES 
	('B–76365789', 'Dofensmirph SL', '17 Calle Malaje', '346574839'),
	('A-65738347', 'Pumba Company', '23 Calle Timón', '765493214'),
	('F-79374822', 'Violet Systems', '49 Calle Excelent', '343735756');
	
-- No me ha dado tiempo a hacer más, lo siento Luismi. :|









