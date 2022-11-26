-- script mysql
create database glacies;
USE Glacies;
-- ------------------------------------------ --

CREATE TABLE Empresa(
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
	nomeFantasia VARCHAR(45) NOT NULL,
	cnpj VARCHAR(20) NOT NULL,
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

CREATE TABLE alerta (
idAlerta int primary key auto_increment,
tipo varchar(45), 
constraint chkTipo check (tipo = 'critico' or tipo = 'alerta'));

CREATE TABLE Freezer(
	idFreezer INT AUTO_INCREMENT,
	identificacao VARCHAR(45) NOT NULL,
	fkEmpresa INT,
	FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa),
	PRIMARY KEY (idFreezer, fkEmpresa)
);

CREATE TABLE Sensor(
	idSensor INT AUTO_INCREMENT,
	numeroSerie VARCHAR(10) NOT NULL,
	fkFreezer INT, 
	FOREIGN KEY (fkFreezer) REFERENCES Freezer(idFreezer),
	PRIMARY KEY (idSensor, fkFreezer)
);

CREATE TABLE dadoSensor(
	idDadoSensor INT AUTO_INCREMENT,
	temperatura decimal (10,2),
	dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
	fkSensor INT,
	FOREIGN KEY (fkSensor) REFERENCES Sensor(idSensor),
	PRIMARY KEY (idDadoSensor, fkSensor)
);

CREATE TABLE alertaSensor(
	idAlertaSensor int auto_increment,
	fkSensor int,
	fkAlerta int,
	FOREIGN KEY (fkAlerta) references alertaSensor(idAlertaSensor),
	foreign key (fkSensor) references Sensor(idSensor),
	primary key (idAlertaSensor,fkSensor,fkAlerta),
	dtAlerta DATETIME DEFAULT CURRENT_TIMESTAMP,
    temperatura decimal(10,2)
);


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

INSERT INTO Sensor (numeroSerie, fkFreezer) VALUES
	('JEJ82U19M0', 1),
    ('8SK20D8J38', 2),
    ('J92B9JJ27A', 3),
    ('JW999A12M0', 4),
    ('OO92NAB4Y7', 5),
    ('9SN3KSM45H', 6),
    ('2JC830KSU2', 7);

INSERT INTO dadoSensor (temperatura, fkSensor) VALUES
	(-25.2, 1),
    (-25.5, 2),
    (-26.1, 3),
    (-25.8, 4),
    (-26.2, 5),
    (-25.0, 6),
    (-24.9, 7);
    
    INSERT INTO alerta (tipo) VALUES
	('critico'),
    ('alerta');
    
    select * from alerta;
    
    select * from alertaSensor;
    
    select DATE_FORMAT(dtAlerta,'%d/%m/%Y %H:%i:%s') as momento_grafico, temperatura from alertaSensor where fkSensor = 1 order by momento_grafico desc limit 8;
    
    select * from sensor;
    
    select * from alertaSensor where fkSensor =1 LIMIT 8;


create table aviso(
id int primary key auto_increment,
titulo varchar(50),
descricao varchar(200),
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);
    