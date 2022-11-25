CREATE TABLE Empresa(
	idEmpresa INT PRIMARY KEY IDENTITY(1,1),
	nomeFantasia VARCHAR(45) NOT NULL,
	cnpj VARCHAR(20) NOT NULL,
	telefone VARCHAR(20),
	responsavel VARCHAR(45)
)

CREATE TABLE Usuario(
	idUsuario INT IDENTITY(1,1),
	nomeUsuario VARCHAR(45) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(16) NOT NULL,
	fkEmpresa INT,
	FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa),
    PRIMARY KEY (idUsuario, fkEmpresa)
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
	fkDadoSensor INT,
	fkAlerta INT,
	FOREIGN KEY (fkAlerta) REFERENCES alertaSensor(idAlertaSensor),
	FOREIGN KEY (fkDadoSensor) REFERENCES dadoSensor(idDadoSensor),
	dtAlerta DATETIME DEFAULT CURRENT_TIMESTAMP,
    temperatura DECIMAL(10,2)
)