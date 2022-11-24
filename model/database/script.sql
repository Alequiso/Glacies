CREATE DATABASE Glacies;
USE Glacies;
-- ------------------------------------------ --

CREATE TABLE Empresa(
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
	nomeFantasia VARCHAR(45) NOT NULL,
	cnpj CHAR(20) NOT NULL,
	telefone VARCHAR(20),
	responsavel VARCHAR(45)
);

CREATE TABLE Usuario(
	idUsuario INT AUTO_INCREMENT,
	nomeUsuario VARCHAR(45) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(16) NOT NULL,
	fkEmpresa INT,
	FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa),
    PRIMARY KEY (idUsuario, fkEmpresa)
);

CREATE TABLE Freezer(
	idFreezer INT AUTO_INCREMENT,
	identificacao VARCHAR(45) NOT NULL,
	fkEmpresa INT,
	FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa),
	PRIMARY KEY (idFreezer, fkEmpresa)
);

CREATE TABLE Sensores(
	idSensores INT AUTO_INCREMENT,
	numeroSerie VARCHAR(10) NOT NULL,
	fkFreezer INT, 
	FOREIGN KEY (fkFreezer) REFERENCES Freezer(idFreezer),
	PRIMARY KEY (idSensores, fkFreezer)
);

CREATE TABLE dadosSensor(
	idDadosSensor INT AUTO_INCREMENT,
	temperatura DECIMAL(10,2),
	dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
	fkSensores INT,
	FOREIGN KEY (fkSensores) REFERENCES Sensores(idSensores),
	PRIMARY KEY (idDadosSensor, fkSensores)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(250),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

-- ------------------------------------------ --

INSERT INTO Empresa (nomeFantasia, cnpj, telefone, responsavel) VALUES
	('Kibon', '17261628000171', '5511949617385', 'kleber' ),
	('Ice Gurt', '77524742000176', '5511972694166', 'Gabriel'),
	('Oggi', '86279941000154', '5511999758432', 'Marlene');

INSERT INTO Usuario (nomeUsuario, email, senha, fkEmpresa) VALUES
	('Roberta', 'roberta@icegurt.com', 'R@bert4', 2),
    ('Giovana', 'gi@oggi.com', '#2002Giovana', 3),
    ('Marcos', 'marcos@oggi.com', 'marcola123', 3),
    ('Matheus', 'matheus@kibon.com', 'mathppp90', 1);

INSERT INTO Freezer (identificacao, fkEmpresa) VALUES
	('Freezer Alpha',1),
    ('Freezer xpto', 1),
    ('Freezer leste', 2),
    ('Freezer central', 2),
    ('Freezer sul', 2),
    ('Freezer terreo', 3),
    ('Freezer primeiro andar', 3);

INSERT INTO Sensores (numeroSerie, fkFreezer) VALUES
	('JEJ82U19M0', 1),
    ('8SK20D8J38', 2),
    ('J92B9JJ27A', 3),
    ('JW999A12M0', 4),
    ('OO92NAB4Y7', 5),
    ('9SN3KSM45H', 6),
    ('2JC830KSU2', 7);

INSERT INTO dadosSensor (temperatura, fkSensores) VALUES
	(-25.2, 1),
    (-25.5, 2),
    (-26.1, 3),
    (-25.8, 4),
    (-26.2, 5),
    (-25.0, 6),
    (-24.9, 7);

-- ------------------------------------------ --

-- Mostrar a temperatura e a data/hora dos respectivos freezers
SELECT f.identificacao AS 'Identificação',  ds.temperatura AS 'Temperatura', ds.dataHora AS 'Data e hora' FROM Freezer f
	JOIN Sensores s ON fkFreezer = idfreezer
	JOIN dadosSensor ds ON ds.fkSensores = s.idSensores;
    
-- Nome da empresa e seu respectivo responsável
SELECT nomeFantasia, responsavel FROM empresa;

-- Identificação dos freezers e seus respectivos sensores
SELECT f.identificacao AS 'Identificação', s.numeroSerie AS 'Número de série' FROM freezer f
	JOIN sensores s ON fkFreezer = idFreezer;

-- ------------------------------------------ --

SELECT CONCAT('A empresa ',nomeFantasia, ' tem como responsável: ',responsavel) FROM Empresa;

SELECT CONCAT('O freezer ',f.identificacao,' está com o sensor ',s.numeroSerie) FROM Freezer f
	JOIN sensores s ON fkFreezer = idFreezer;
    
SELECT CONCAT('O freezer ',f.identificacao,' está com o sensor ', s.numeroSerie, ' e o histórico de temperatura do dia ',ds.dataHora, ' é ',ds.temperatura) FROM Freezer f 
	JOIN Sensores s ON fkFreezer = idFreezer
    JOIN dadosSensor ds ON fkSensores = idSensores;
    
-- ------------------------------------------ --
    


