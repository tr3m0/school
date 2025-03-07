SELECT *
FROM Actors
WHERE id IN (
    SELECT actor
    FROM Actings
    WHERE film IN (
        SELECT id
        FROM Films
        WHERE production_year = 2020
    )
);

SELECT *
FROM Films
WHERE genre IN ('Action', 'Comedy') AND id IN (
    SELECT film
    FROM Shows
    WHERE cinema IN (1, 2)
);

SELECT *
FROM Shows
WHERE earning > 50.000 AND film IN (
    SELECT id
    FROM Films
    WHERE production_year IN (2018, 2019)
);

SELECT *
FROM Films
WHERE production_year IN (2015, 2016) AND id IN (
    SELECT film
    FROM Shows
    WHERE cinema IN (
        SELECT id
        FROM Cinemas
        WHERE city = 'Rome'
    )
);

SELECT *
FROM Actors
WHERE id IN (
    SELECT actor
    FROM Actings
    WHERE film IN (
        SELECT id
        FROM Films
        WHERE nationality = 'French' AND production_year < 2010
    )
);