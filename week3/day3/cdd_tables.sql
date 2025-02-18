-- CREATE TABLE employees (
-- emp_id SERIAL,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(50) NOT NULL,
-- quality VARCHAR(50),
-- PRIMARY KEY (emp_id)
-- );

-- INSERT INTO employees (first_name, last_name, quality) VALUES
-- ('George', 'Cleverly', 'Speaks Well'),
-- ('Tom', 'Rooney', 'Manages Well'),
-- ('Jazz', 'Cleverly', 'Punctual'),
-- ('Clark', 'James', 'Quick Worker'),
-- ('Wash', 'Ramp', 'Manages Well'),
-- ('Hill', 'Billings', 'Quick Worker');

-- CREATE TABLE ratings (
-- emp_id SERIAL,
-- rating INTEGER,
-- PRIMARY KEY (emp_id)
-- );

-- INSERT INTO ratings (rating) VALUES
-- (3),(1),(2),(5),(2),(4);

-- SELECT a.emp_id, a.first_name, a.last_name, b.rating
-- FROM employees a, ratings b
-- WHERE a.emp_id = b.emp_id AND b.rating > 
-- (SELECT rating
-- FROM ratings
-- WHERE rating=3);



