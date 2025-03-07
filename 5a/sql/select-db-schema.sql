CREATE TABLE Actors(
    id INTEGER PRIMARY KEY,
    name VARCHAR(100),
    birth_year INTEGER,
    nationality VARCHAR(50)
);

CREATE TABLE Films(
    id INTEGER PRIMARY KEY,
    title VARCHAR(200),
    production_year INTEGER,
    nationality VARCHAR(50),
    director VARCHAR(100),
    genre VARCHAR(50),
    duration INTEGER
);

CREATE TABLE Actings(
    actor INTEGER REFERENCES Actors(id),
    film INTEGER REFERENCES Films(id),
    PRIMARY KEY (actor, film)
);

CREATE TABLE Cinemas(
    id INTEGER PRIMARY KEY,
    seats INTEGER,
    name VARCHAR(100),
    city VARCHAR(100)
);

CREATE TABLE Shows(
    id INTEGER PRIMARY KEY,
    film INTEGER REFERENCES Films(id),
    cinema INTEGER REFERENCES Cinemas(id),
    earning DECIMAL(10, 2),
    date DATE
);

INSERT INTO Actors (id, name, birth_year, nationality) VALUES
(1, 'Leonardo DiCaprio', 1974, 'American'),
(2, 'Meryl Streep', 1949, 'American'),
(3, 'Emma Watson', 1990, 'British'),
(4, 'Tom Hanks', 1956, 'American'),
(5, 'Cate Blanchett', 1969, 'Australian');

INSERT INTO Films (id, title, production_year, nationality, director, genre, duration) VALUES
(1, 'The Revenant', 2015, 'American', 'Alejandro González Iñárritu', 'Drama', 156),
(2, 'The Devil Wears Prada', 2006, 'American', 'David Frankel', 'Comedy', 109),
(3, 'Harry Potter and the Philosopher''s Stone', 2001, 'British', 'Chris Columbus', 'Fantasy', 152),
(4, 'Forrest Gump', 1994, 'American', 'Robert Zemeckis', 'Drama', 142),
(5, 'Blue Jasmine', 2013, 'American', 'Woody Allen', 'Drama', 98);

INSERT INTO Actings (actor, film) VALUES
(1, 1), -- Leonardo Di Caprio => Redivivo
(2, 2), -- Meryl Streep => Il Diavolo Veste Prada
(3, 3), -- Emma Watson => Harry Potter e la Pietra Filosofale
(4, 4), -- Tom Hanks => Forrest Gump
(5, 5); -- Cate Blanchett => Blue Jasmine

INSERT INTO Cinemas (id, seats, name, city) VALUES
(1, 200, 'Grand Cinema', 'New York'),
(2, 150, 'Silver Screen', 'Los Angeles'),
(3, 300, 'Cineplex Odeon', 'London'),
(4, 250, 'Regal Theatre', 'Sydney'),
(5, 180, 'Imperial Palace', 'Paris');

INSERT INTO Shows (id, film, cinema, earning, date) VALUES
(1, 1, 1, 5000.00, '2023-01-15'), -- Redivivo => Grand Cinema, 2023-01-15
(2, 2, 2, 3000.50, '2023-02-20'), -- Il Diavolo Veste Prada => Silver Screen, 2023-02-20
(3, 3, 3, 7000.25, '2023-03-10'), -- Harry Potter e la Pietra Filosofale => Cineplex Odeon, 2023-03-10
(4, 4, 4, 6000.00, '2023-04-05'), -- Forrest Gump => Regal Theatre, 2023-04-05
(5, 5, 5, 4500.75, '2023-05-12'); -- Blue Jasmine => Imperial Palace, 2023-05-12