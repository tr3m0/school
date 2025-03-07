SELECT A.*, F.*
FROM Actors A
LEFT JOIN Actings Act ON A.id = Act.actor
JOIN Films F ON A.id = Act.actor;

SELECT COUNT(*)
FROM Films;

SELECT MAX(earning)
FROM Shows;

SELECT MIN(earning)
FROM Shows;

SELECT SUM(earning)
FROM Shows;

SELECT AVG(seats)
FROM Cinemas;

SELECT AVG(birth_year)
FROM Actors;

SELECT COUNT(*)
FROM Films
WHERE genre = 'Action';

SELECT MAX(S.earning)
FROM Cinemas C
JOIN Shows S ON C.id = S.cinema
WHERE city = 'Rome';

SELECT MAX(A.birth_year)
FROM Actors A
JOIN Actings Act ON A.id = Act.actor
JOIN Films F ON Act.film = F.id
WHERE F.nationality = 'Italian';

SELECT SUM(S.earning)
FROM Shows S
JOIN Films F ON S.film = F.id
WHERE F.director = 'Pasolini';