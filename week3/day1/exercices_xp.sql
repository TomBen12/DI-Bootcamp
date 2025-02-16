---- EX1 --

-- CREATE TABLE items (
-- item_id SERIAL PRIMARY KEY,
-- item_name VARCHAR(50) NOT NULL,
-- item_price SMALLINT NOT NULL
-- )

-- CREATE TABLE customers (
-- customer_id SERIAL PRIMARY KEY,
-- customer_first_name VARCHAR(50) NOT NULL,
-- customer_last_name VARCHAR(50) NOT NULL
-- )
---- EX2 --
-- INSERT INTO items (
-- item_name, item_price)
-- VALUES
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80)

-- INSERT INTO customers (
-- customer_first_name, customer_last_name)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson')
---- EX3 --
-- SELECT * FROM customers, items
-- SELECT * FROM items WHERE item_price > 80
-- SELECT * FROM items WHERE item_price <= 300
-- SELECT * FROM customers WHERE customer_last_name = 'Smith'
---- Return all the table fields but empty. --
-- SELECT * FROM customers WHERE customer_last_name = 'Jones'
-- SELECT * FROM customers WHERE customer_last_name != 'Scott'


