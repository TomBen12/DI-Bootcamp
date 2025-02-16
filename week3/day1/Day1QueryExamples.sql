-- CREATE TABLE actors (
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(200) NOT NULL,
-- age DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL)

-- SELECT * FROM actors
-- SELECT first_name, age FROM actors
-- INSERT INTO actors(first_name, last_name, age, number_oscars)
-- VALUES
-- ('Matt','Damon', '08/10/1970', 5)

-- INSERT INTO actors(first_name, last_name, age, number_oscars)
-- VALUES
-- ('Natalie','Portman', '06/09/1981', 1)

-- INSERT INTO actors(first_name, last_name, age, number_oscars)
-- VALUES
-- ('Penélope','Cruz Sánchez', '04/28/1981', 0)

-- INSERT INTO actors(first_name, last_name, age, number_oscars)
-- VALUES
-- ('Tom','Hanks', '07/9/1956', 2),
-- ('Hugh','Jackman', '10/12/1968', 20),
-- ('Tom','Cruz', '04/22/1971', 1)

-- SELECT * FROM actors
-- SELECT first_name, number_oscars FROM actors WHERE number_oscars >= 3
-- SELECT first_name, number_oscars FROM actors WHERE first_name != 'Matt' AND number_oscars < 5

-- not case sensitive 
-- SELECT * FROM actors WHERE last_name ILIKE 'DA%'
-- case sensitive
-- SELECT * FROM actors WHERE last_name LIKE '%mo%'
-- placeholder = %

-- SELECT first_name, number_oscars FROM actors WHERE first_name = 'Tom' OR first_name = 'Natalie' ORDER BY number_oscars DESC

-- SELECT * FROM actors

-- UPDATE actors
-- SET first_name = 'Daniel',
-- last_name = 'PUKA'
-- WHERE
-- first_name = 'Penélope' AND last_name = 'Cruz Sánchez'
-- RETURNING *

-- DELETE FROM actors WHERE first_name = 'Hugh'
-- RETURNING *

-- ALTER TABLE actors RENAME number_oscars TO number_of_oscars

-- ALTER TABLE actors ADD COLUMN country VARCHAR(100)

-- UPDATE actors
-- SET country ='USA'
-- WHERE country IS NULL

-- DROP TABLE IF EXISTS actors





