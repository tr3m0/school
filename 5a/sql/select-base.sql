SELECT name
FROM Cinemas
WHERE city = 'Pisa';

SELECT title
FROM Films
WHERE director = 'F. Fellini' AND production_year > 1960;

SELECT title, duration
FROM Films
WHERE genre = 'Sci-Fi' AND nationality IN ('French', 'Japanese') AND production_year > 1990;

SELECT *
FROM Actors
WHERE name LIKE 'G%' AND nationality = 'Italian';

SELECT *
FROM Films
WHERE title LIKE '%sole%' AND genre = 'Fantasy';