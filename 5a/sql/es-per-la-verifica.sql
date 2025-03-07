SELECT A.*, F.*
FROM Actors A
JOIN Actings Act ON A.id = Act.actor
JOIN Films F on Act.film = F.id;

SELECT S.*, F.title, C.name
FROM Shows S
JOIN Films F ON S.film = F.id
JOIN Cinemas C ON S.cinema = C.id;

SELECT *
FROM Films
WHERE genre = 'Action';

SELECT COUNT(*)
FROM Shows S
JOIN Films F ON S.film = F.id
GROUP BY F.id;

SELECT SUM(S.earning)
FROM Shows S
JOIN Films F ON S.film = F.id
GROUP BY F.id;

SELECT A.*
FROM Shows S
JOIN Cinemas C ON S.cinema = C.id
JOIN Films F ON S.film = F.id
JOIN Actings Act ON F.id = Act.film
JOIN Actors A ON Act.actor = A.id
WHERE C.city = 'Rome'
GROUP BY F.id;

SELECT COUNT(*)
FROM Films
GROUP BY production_year
ORDER BY production_year ASC;

SELECT director
FROM Films
GROUP BY director
HAVING COUNT(*) > 3;

SELECT A.*
FROM Films F
JOIN Actings Act ON F.id = Act.film
JOIN Actors A ON Act.actor = A.id
GROUP BY F.id
HAVING COUNT(*) >= 5;

SELECT city
FROM Cinemas
GROUP BY city
HAVING COUNT(*) > 2;

SELECT F.*
FROM Films F
JOIN Shows S ON F.id = S.film
GROUP BY F.id
HAVING SUM(S.earning) > 50000;

SELECT F.director
FROM Films F
JOIN Shows S ON F.id = S.film
JOIN Cinemas C ON S.cinema = C.id
GROUP BY F.director
HAVING COUNT(*) > 3;

SELECT F.title, F.nationality, A.name
FROM Films F
JOIN Actings Act ON F.id = Act.film
JOIN Actors A ON Act.actor = A.id
GROUP BY A.id
HAVING COUNT(DISTINCT F.nationality) >= 2;

SELECT COUNT(*)
FROM Actors A
JOIN Actings Act ON A.id = Act.actor
JOIN Films F ON Act.film = F.id
WHERE A.nationality IN ('italian', 'French', 'Spanish') AND F.director = 'Rossellini';

SELECT *
FROM Cinemas
WHERE seats > 100 AND name LIKE '%Cine%';

SELECT *
FROM Shows
WHERE date BETWEEN '2023-1-1' AND '2023-31-12';

SELECT DISTINCT F.genre, COUNT(*), SUM(S.earning)
FROM Films F
JOIN Shows S ON F.id = S.film
WHERE F.genre LIKE '%drama%'
GROUP BY F.genre
HAVING COUNT(*) > 2
ORDER BY SUM(S.earning) DESC;