--EX1--

----1----
-- SELECT * FROM language

----2----
-- SELECT film.title, film.description, language.name
-- FROM film
-- JOIN language
-- ON film.language_id = language.language_id

----3----
-- SELECT film.title, film.description, language.name AS language_name
-- FROM language
-- LEFT JOIN film
-- ON film.language_id = language.language_id 

----had to go to next page to see the nulls

----4----
-- CREATE TABLE new_film (
-- nf_id SERIAL,
-- film_name VARCHAR(50),
-- PRIMARY KEY (nf_id)
-- )

-- INSERT INTO new_film (film_name)
-- VALUES ('Titanic') ,('Interstellar'), ('Godzilla'), ('Spirited Away')

----5----
-- CREATE TABLE customer_review (
-- review_id SERIAL,
-- nf_id INTEGER,
-- language_id INTEGER,
-- title VARCHAR(50) NOT NULL,
-- score SMALLINT CHECK (score BETWEEN 1 AND 10), ----checks that the value rating between 1 and 10----
-- review_text TEXT NOT NULL,
-- last_update DATE NOT NULL,
-- PRIMARY KEY (review_id),
-- FOREIGN KEY (nf_id) REFERENCES new_film (nf_id) ON DELETE CASCADE,
-- FOREIGN KEY (language_id) REFERENCES language (language_id) ON DELETE CASCADE
-- )

----6----
-- INSERT INTO customer_review (nf_id, language_id, title, score, review_text, last_update)
-- VALUES (1,1,'Titanic', 10, 'This film was an absolute masterpiece. Every scene was breathtaking.', '2025-02-18'),
-- (3,3,'Godzilla', 6, 'The movie had great acting, but it was too slow in the middle.', '2025-02-18')

----7----
-- DELETE FROM new_film
-- WHERE film_name = 'Godzilla'

-- SELECT * FROM customer_review
----The review sharing the same relation (nf_id) got deleted as well beacause of CASCADE----

--EX2--

----1----

-- UPDATE film
-- SET language_id = 3
-- WHERE description ILIKE '%japan%';


----2----
---- store_id and address_id ----
---when we insert these parameter we have to make sure they exsist and match the address id and store id/

----3----
-- DROP TABLE customer_review
--For me it was verry easy because it doesn't have any foreign key constrain! Dropped it with no regret !

-- ----4----
-- SELECT COUNT(*) FROM rental
-- WHERE return_date IS NULL

----5----
-- SELECT f.title
-- FROM rental r
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE r.return_date IS NULL
-- ORDER BY f.rental_rate DESC
-- LIMIT 30;

----6----
----1----
-- SELECT title
-- FROM film f
-- JOIN film_actor fa ON fa.film_id = f.film_id
-- JOIN actor a ON a.actor_id = fa.actor_id
-- WHERE a.first_name ILIKE 'Penelope'
-- AND a.last_name ILIKE 'Monroe'
-- AND f.description ILIKE'%sumo wrestler%';
----2----
-- SELECT title
-- FROM film
-- WHERE length < 60
-- AND rating = 'R'
-- AND description ILIKE '%documentary%'
----3----
-- SELECT f.title
-- FROM film f
-- JOIN inventory i ON i.film_id = f.film_id
-- JOIN rental r ON r.inventory_id = i.inventory_id
-- JOIN payment p ON p.rental_id = r.rental_id
-- JOIN customer c ON c.customer_id = r.customer_id
-- WHERE f.rental_rate > 4
-- AND c.first_name = 'Matthew'
-- AND c.last_name = 'Mahan'
-- AND r.return_date BETWEEN '2005-07-28' AND '2005-09-01'
----4----
SELECT f.title
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND f.description ILIKE '%boat%'
ORDER BY f.replacement_cost DESC
LIMIT 1




