SELECT C.name
FROM Cinemas C
JOIN Shows S ON C.id = S.cinema
JOIN Films F ON S.film = F.id
JOIN Actings Act ON F.id = Act.film
JOIN Actors A ON Act.actor = A.id
WHERE S.date = '2004-25-12' AND A.name = 'R. Williams' AND C.city = 'Naples';

SELECT F.title
FROM Films F
JOIN Actings Act ON F.id = Act.film
JOIN Actors A ON Act.actor = A.id
WHERE A.name = 'M. Mastroianni' OR A.name = 'S. Loren';

SELECT F.title
FROM Films F
JOIN Actings Act ON F.id = Act.film
JOIN Actors A1 ON Act.actor = A1.id
JOIN Actors A2 ON Act.actor = A2.id
WHERE A1.name = 'M. Mastroianni' AND A2.name = 'S. Loren';

SELECT F.title, A.name
FROM Films F
JOIN Actings Act ON F.id = Act.film
JOIN Actors A ON Act.actor = A.id
WHERE A.nationality = 'French';

SELECT F.title, C.name
FROM Films F
JOIN Shows S ON F.id = S.film
JOIN Cinemas C ON S.cinema = C.id
WHERE C.city = 'Pisa' AND S.date LIKE '2005-01%';