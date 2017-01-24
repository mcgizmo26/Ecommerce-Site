CREATE TABLE products (
  id serial primary key not null,
  name varchar(320),
  description varchar(200),
  price numeric(10,2),
  type varchar(20),
  imageurl text
);

CREATE TABLE cart (
  id serial primary key not null,
  users_id int references users(id),
  products_id int references products(id)
);

CREATE TABLE users (
  id serial primary key not null,
  name varchar (50),
  username varchar (50),
  password text
);

db.cart.find({user_id: req.user.id})
