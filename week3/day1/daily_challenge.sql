
-- SELECT COUNT(*) FROM actors
--6 actors are in the table--

--Because we defined some fields as non nullable an error raises :

-- INSERT INTO actors(first_name, last_name, number_oscars)
-- VALUES
-- ('Daniel', 'Radcliff', 0)