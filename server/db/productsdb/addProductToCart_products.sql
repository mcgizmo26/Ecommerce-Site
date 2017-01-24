INSERT INTO CART (id, imageurl, name, price)
SELECT $1, $2, $3, $4
FROM products;
