---EX2---

----1----
-- SELECT *
-- FROM customer;

----2----
-- SELECT (first_name, last_name) as full_name
-- FROM customer

----3----
-- SELECT DISTINCT create_date
-- FROM customer
-- GROUP BY create_date

----4----
-- SELECT *
-- FROM customer
-- ORDER BY first_name DESC

----5----
-- SELECT film_id, title, description, release_year, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC

----6----
-- SELECT address, phone
-- FROM address
-- WHERE district = 'Texas'

----7----
-- SELECT *
-- FROM film
-- WHERE film_id = 15
-- OR film_id = 150

----8----
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = 'Interstellar'

----9----
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title ILIKE 'Inter%'

----10----
-- SELECT *
-- FROM film
-- ORDER BY rental_rate
-- DESC 
-- LIMIT 10

----11----
-- SELECT *
-- FROM film
-- HAVING COUNT(*) < 10
-- ORDER BY rental_rate DESC 
-- OFFSET 10
-- LIMIT 10

----bonus----
-- SELECT *
-- FROM film
-- ORDER BY rental_rate ASC
-- OFFSET 10 FETCH NEXT 10 ROWS ONLY;

----12----
-- SELECT customer.first_name, customer.last_name, 
-- payment.amount, payment.payment_date
-- FROM customer
-- JOIN payment
-- ON customer.customer_id = payment.customer_id
-- ORDER BY customer.customer_id

----13----
-- SELECT film.film_id, film.title
-- FROM film
-- LEFT JOIN inventory
-- ON film.film_id = inventory.film_id
-- WHERE inventory.film_id IS NULL;

----14----
-- SELECT city.city_id, country.country, city.city
-- FROM city
-- JOIN country
-- ON city.country_id = country.country_id

----15----
-- customer’s id, names (first and last), the amount
-- and the date of payment ordered by the id of the staff 
-- member who sold them the dvd.

-- SELECT customer.customer_id, customer.first_name,
-- customer.last_name, payment.amount, payment.payment_date
-- FROM customer
-- JOIN payment
-- ON customer.customer_id = payment.customer_id





