CREATE TABLE Studente(
    ID INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(10) NOT NULL,
    cognome VARCHAR(10),
    telefono VARCHAR(10) NOT NULL,
    idClasse VARCHAR(10)
);

CREATE TABLE Classe(
    idClasse VARCHAR(10) PRIMARY KEY,
    sezione CHAR(1) NOT NULL,
    anno INTEGER NOT NULL,
    indirizzo VARCHAR(20) NOT NULL
);

INSERT INTO Classe (idClasse, sezione, anno, indirizzo) VALUES
('1A', 'A', 1, 'Scientifico'),
('2B', 'B', 2, 'Classico'),
('3C', 'C', 3, 'Linguistico');

INSERT INTO Studente (nome, cognome, telefono, idClasse) VALUES
('Mario', 'Rossi', '1234567890', '1A'),
('Luigi', 'Verdi', '0987654321', '1A'),
('Giovanna', 'Bianchi', '1122334455', '2B'),
('Sara', NULL, '6677889900', '2B'),
('Andrea', 'Neri', '5566778899', '3C');