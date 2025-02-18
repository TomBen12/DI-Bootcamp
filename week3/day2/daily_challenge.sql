-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)


-- SELECT * FROM SecondTab

--Q1--
    -- SELECT COUNT(*) 
    -- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
	--select how much ,from frsttab where the id is not null
	--answer = 0
	-- why: Key rule in SQL: NULL makes comparisons return UNKNOWN. unknown is not true or false so no rows match.
	-- Since every row in FrstTab fails the NOT IN condition, the query returns 0.
--Q2--
    -- SELECT COUNT(*) 
    -- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
	-- select how much id in the firsttab are NOTTTT 5
	--answer is 2 because sql doesn't include null in its counting in methods like count() and not in. so only 6,7 are counted
--Q3--
	-- SELECT COUNT(*) 
 --    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
 		-- answer =0
	-- 0 the whole condition fails when unknow is compaired (comparaison to null)

--Q4--
	-- SELECT COUNT(*) 
 	--   FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
	--  Here the answer is 2 because we filter the null inside the condition to avoid returning unknown
	-- 6,7 from first tab are not in the second tab (or null as we stated) the count is then 2! 
 

	