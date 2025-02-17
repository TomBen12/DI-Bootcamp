-- CREATE TABLE movies (
-- movie_id SERIAL,
-- movie_title VARCHAR (100) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- )

-- CREATE TABLE movies (
--     movie_id SERIAL PRIMARY KEY,
--     movie_title VARCHAR(100) NOT NULL,
--     movie_story TEXT,
--     actor_playing_id INTEGER,
--     FOREIGN KEY (actor_playing_id) REFERENCES actors(actor_id)
-- );

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
--     ( 'Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon')),
--     ( 'Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
--     (SELECT actor_id from actors WHERE first_name='Matt' AND last_name='Damon'));
-- SELECT * FROM movies

-- CREATE TABLE producers (producer_id SERIAL, 
-- producer_first_name VARCHAR(50) NOT NULL,producer_last_name VARCHAR(50) NOT NULL, produced_movie_id INTEGER, 
-- PRIMARY KEY (producer_id),
-- FOREIGN KEY (produced_movie_id) REFERENCES movies (movie_id)
-- )

-- INSERT INTO producers (producer_first_name, producer_last_name, produced_movie_id)
-- VALUES ('Lawrence', 'Bender', (SELECT movie_id from movies WHERE movie_title ='Good Will Hunting'))
