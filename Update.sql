USE bamazon;

SELECT * FROM products;
UPDATE products
SET  DepartmentName = "Camping"
WHERE ItemID = 7;
SELECT * FROM products;