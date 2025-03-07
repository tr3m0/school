SELECT COUNT(*)
FROM Cinemas
GROUP BY city;

SELECT COUNT(*)
FROM Cinemas
WHERE seats > 60
GROUP BY city;

SELECT COUNT(*)
FROM Films
WHERE production_year > 1990
GROUP BY director;

SELECT SUM(S.earning)
FROM Shows S
JOIN Films F ON S.film = F.id
GROUP BY F.director;

SELECT F.title, COUNT(*), SUM(S.earning)
FROM Shows S
JOIN Films F ON S.film = F.id
JOIN Cinemas C ON S.cinema = C.id
WHERE F.director = 'S. Spielberg' AND C.city = 'Pisa'
GROUP BY F.id;

SELECT COUNT(*)
FROM Films F
JOIN Actings Act ON F.id = Act.film
JOIN Actors A ON Act.actor = A.id
GROUP BY F.director, A.id;

SELECT F.director, F.title
FROM Films F
JOIN Actings Act ON F.id = Act.film
JOIN Actors A ON Act.actor = A.id
GROUP BY F.id
HAVING COUNT(*) < 6;

SELECT F.id, F.title, SUM(S.earning)
FROM Films F
JOIN Shows S ON F.id = S.film
WHERE F.production_year > 2000
GROUP BY F.id;

SELECT COUNT(*)
FROM Actors A
JOIN Actings Act ON A.id = Act.actor
JOIN Films F ON Act.film = F.id
WHERE A.birth_year < 1970
GROUP BY F.id;

SELECT F.title, SUM(S.earning)
FROM Films F
JOIN Shows S ON F.id = S.film
WHERE F.genre = 'Sci-Fi'
GROUP BY F.id;

SELECT F.title, SUM(S.earning)
FROM Films F
JOIN Shows S ON F.id = S.film
WHERE F.genre = 'Sci-Fi' AND S.date > '01-1-1'
GROUP BY F.id;