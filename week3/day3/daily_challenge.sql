--EX1--
----Part 1----
----1----
-- CREATE TABLE customer (
-- customer_id SERIAL,
-- first_name VARCHAR(50),
-- last_name VARCHAR(50) NOT NULL,
-- PRIMARY KEY (customer_id))

-- CREATE TABLE customer_profile (
-- customer_id INTEGER,
-- is_logged BOOLEAN DEFAULT FALSE,
-- PRIMARY KEY (customer_id),
-- FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE
-- )

----2----
-- INSERT INTO customer (first_name, last_name)
-- VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive')

----3----
-- INSERT INTO customer_profile (is_logged, customer_id)
-- SELECT TRUE, customer_id FROM customer
-- WHERE first_name = 'John' AND last_name = 'Doe'

-- INSERT INTO customer_profile (is_logged, customer_id)
-- SELECT False, customer_id FROM customer
-- WHERE first_name = 'Jerome' AND last_name = 'Lalu'

----4----
-- SELECT c.first_name
-- FROM customer c
-- JOIN customer_profile cp
-- ON c.customer_id = cp.customer_id
-- WHERE cp.is_logged = TRUE

-- SELECT c.first_name, cp.is_logged
-- FROM customer c
-- LEFT JOIN customer_profile cp
-- ON c.customer_id = cp.customer_id

-- SELECT COUNT(c.first_name)
-- FROM customer c
-- JOIN customer_profile cp
-- ON c.customer_id = cp.customer_id
-- WHERE cp.is_logged = FALSE

----Part 2----
-- CREATE TABLE book (
-- book_id SERIAL, 
-- title VARCHAR(50) NOT NULL, 
-- author VARCHAR(50) NOT NULL,
-- age SMALLINT,
-- PRIMARY KEY (book_id)
-- )
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

----2----
-- INSERT INTO book (title, author)
-- VALUES ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee')

----3----
-- CREATE TABLE student (
-- student_id SERIAL, 
-- student_name VARCHAR(50) NOT NULL UNIQUE, 
-- age SMALLINT CHECK(age<=15),
-- PRIMARY KEY (student_id)
-- )

----4----
-- INSERT INTO student (student_name, age)
-- VALUES ('John',12),('Lera',11),('Patrick',10),('Bob',14)

----5----
-- CREATE TABLE library (
-- book_fk_id INTEGER,
-- student_fk_id INTEGER,
-- borrowed_date DATE,
-- FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- FOREIGN KEY (student_fk_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- PRIMARY KEY (book_fk_id, student_fk_id)
-- )
----6----
-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- SELECT b.book_id, s.student_id, '2022-02-15'
-- FROM book b, student s
-- WHERE b.title = 'Alice In Wonderland' AND s.student_name = 'John';

-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date) 
-- SELECT b.book_id, s.student_id, '2021-03-03'
-- FROM book b, student s
-- WHERE b.title = 'To kill a mockingbird' AND s.student_name = 'Bob';

-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- SELECT b.book_id, s.student_id, '2021-05-23'
-- FROM book b, student s
-- WHERE b.title = 'Alice In Wonderland' AND s.student_name = 'Lera';

-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- SELECT b.book_id, s.student_id, '2021-08-12'
-- FROM book b, student s
-- WHERE b.title = 'Harry Potter' AND s.student_name = 'Bob';

----7----
-- SELECT * FROM library

-- SELECT s.student_name, b.title
-- FROM library l
-- JOIN student s ON l.student_fk_id = s.student_id
-- JOIN book b ON b.book_id = l.book_fk_id

-- SELECT AVG(s.age)
-- FROM library l
-- JOIN student s ON l.student_fk_id = s.student_id
-- JOIN book b ON b.book_id = l.book_fk_id
-- WHERE b.title = 'Alice In Wonderland'

-- DELETE FROM student WHERE student.name = 'Patrick';
-- SELECT * FROM library
-- DELETE FROM student WHERE student.name = 'Bob';
-- SELECT * FROM library
----if we delete a child aparent that has a child with fk constrain on DELETE, it will be respected
----and on deleting the parent related row the child(rens) row will also be deleted!

