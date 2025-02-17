-- JOINS IN SQL

-- INNER JOIN

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id)
-- VALUES
-- ('Harry Potter and Philosopher`s Stone', 
--     'Harry Potter and the Philosopher`s Stone is an enthralling start to Harry`s journey toward coming to terms with his past and facing his future.',
-- NULL)


-- CREATE TABLE movie_actors AS
-- --INNER JOIN---
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id

-- SELECT producers.producer_first_name,producers.producer_last_name , movies.movie_title
-- FROM producers
-- INNER JOIN movies
-- ON producers.producer_id = movies.movie_id

--ALIAS--
-- SELECT pd.producer_first_name,pd.producer_last_name , mv.movie_title
-- FROM producers AS pd
-- INNER JOIN movies AS mv
-- ON pd.producer_id = mv.movie_id

-- LEFT JOIN -- ALL FROM LEFT
-- SELECT ac.first_name,ac.last_name , mv.movie_title
-- FROM actors as ac
-- LEFT JOIN movies AS mv
-- ON ac.actor_id = mv.actor_playing_id

-- FULL JOIN -- ALL BOTH
-- SELECT ac.first_name,ac.last_name , mv.movie_title
-- FROM actors as ac
-- FULL JOIN movies AS mv
-- ON ac.actor_id = mv.actor_playing_id

-- CREATE TABLE countries (
-- country_id SERIAL PRIMARY KEY,
-- country_name VARCHAR(50)
-- )

-- INSERT INTO countries (country_name)
-- VALUES ('USA'),('Israel'),('Brasil'),('Canada')

