SELECT F.title, A.name, A.nationality
FROM Films F
JOIN Actings Act ON F.id = Act.film
JOIN Actors A ON Act.actor = A.id;

SELECT F.title, C.name, S.earning
FROM Shows S
JOIN Cinemas C ON S.cinema = C.id
JOIN Films F ON S.film = F.id;

SELECT A.*, F.*, C.city
FROM Shows S
JOIN Cinemas C ON S.cinema = C.id
JOIN Films F ON S.film = F.id
JOIN Actings Act ON F.id = Act.film
JOIN Actors A ON Act.actor = A.id;

SELECT F.*, A.name, A.nationality
FROM Films F
JOIN Actings Act ON F.id = Act.film
JOIN Actors A ON Act.actor = A.id
WHERE F.title LIKE '%Action%' AND A.nationality = 'Italian';

SELECT F.*
FROM Shows S
JOIN Films F ON S.film = F.id
JOIN Cinemas C ON S.cinema = C.id
WHERE C.city = 'Pisa' AND S.earning > 1000 AND S.date BETWEEN '2005-1-1' AND '2005-31-12';

SELECT A.*
FROM Actors A
JOIN Actings Act ON A.id = Act.actor
JOIN Films F ON Act.film = F.id
WHERE A.nationality = 'French' AND F.production_year > 2010;

SELECT F.*
FROM Shows S
JOIN Films F ON S.film = F.id
JOIN Cinemas C ON S.cinema = C.id
WHERE F.title LIKE 'La%' AND C.city = 'Rome' AND C.seats > 100;

SELECT *
FROM Actors A
JOIN Actings Act ON A.id = Act.actor
JOIN Films F ON Act.film = F.id
WHERE( A.nationality = 'French' OR A.nationality = 'Italian') AND F.genre = 'Comedy';