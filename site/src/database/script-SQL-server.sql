CREATE TABLE Empresa(
	idEmpresa INT PRIMARY KEY IDENTITY(1,1),
	nomeFantasia VARCHAR(45) NOT NULL,
	cnpj VARCHAR(20) NOT NULL,
	telefone VARCHAR(20),
	responsavel VARCHAR(45)
)

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY IDENTITY(1,1),
	nomeUsuario VARCHAR(45) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(16) NOT NULL,
	fkEmpresa INT,
	FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa),
)

CREATE TABLE Alerta(
	idAlerta INT PRIMARY KEY IDENTITY(1,1),
	tipo VARCHAR(45), 
	CONSTRAINT chkTipo CHECK (tipo = 'critico' or tipo = 'alerta')
)

CREATE TABLE Freezer(
	idFreezer INT PRIMARY KEY IDENTITY(1,1),
	identificacao VARCHAR(45) NOT NULL,
	fkEmpresa INT,
	FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa)
)

CREATE TABLE Sensor(
	idSensor INT PRIMARY KEY IDENTITY(1,1),
	numeroSerie VARCHAR(10) NOT NULL,
	fkFreezer INT, 
    FOREIGN KEY (fkFreezer)
        REFERENCES Freezer(idFreezer)
)

CREATE TABLE dadoSensor(
	idDadoSensor INT PRIMARY KEY IDENTITY(1,1),
	temperatura DECIMAL (10,2),
	dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
	fkSensor INT,
	FOREIGN KEY (fkSensor) 
        REFERENCES Sensor(idSensor),
)

CREATE TABLE alertaSensor(
	idAlertaSensor INT PRIMARY KEY IDENTITY(1,1),
	fkSensor INT,
	fkAlerta INT,
	FOREIGN KEY (fkAlerta) REFERENCES alertaSensor(idAlertaSensor),
	FOREIGN KEY (fkSensor) REFERENCES Sensor(idSensor),
	dtAlerta DATETIME DEFAULT CURRENT_TIMESTAMP,
    temperatura DECIMAL(10,2)
)

CREATE TABLE Aviso (
	idAviso INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(250),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
)

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
    ('JW999A12M0', 4);
INSERT INTO dadoSensor (temperatura, fkSensor) VALUES
	(-25.2, 1),
    (-25.5, 2),
    (-26.1, 3),
    (-25.8, 4);


INSERT INTO Alerta (tipo) VALUES
	('critico'),
	('alerta');

	SELECT * FROM Alerta
	SELECT * FROM alertaSensor
	SELECT * FROM Aviso
	SELECT * FROM dadoSensor
	SELECT * FROM Empresa 
	SELECT * FROM Freezer 
	SELECT * FROM Sensor 
	SELECT * FROM Usuario