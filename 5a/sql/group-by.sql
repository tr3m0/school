SELECT COUNT(*)
FROM Films
GROUP BY nationality;

SELECT COUNT(*)
FROM Actors
GROUP BY nationality;

SELECT AVG(S.earning)
FROM Shows S
JOIN Cinemas C ON S.cinema = C.id
GROUP BY C.id;

SELECT COUNT(*)
FROM Shows S
JOIN Cinemas C ON S.cinema = C.id
GROUP BY C.id;

SELECT COUNT(*)
FROM Films
GROUP BY production_year;

SELECT SUM(S.earning)
FROM Shows S
JOIN Films F ON S.film = F.id
GROUP BY F.id;

SELECT COUNT(*)
FROM Films F
JOIN Actings Act ON F.id = Act.film
JOIN Actors A ON Act.actor = A.id
GROUP BY F.id;

SELECT COUNT(*)
FROM Shows S
JOIN Cinemas C ON S.cinema = C.id
GROUP BY C.city;

SELECT COUNT(*)
FROM Cinemas
GROUP BY city;

SELECT COUNT(*)
FROM Films
GROUP BY genre;