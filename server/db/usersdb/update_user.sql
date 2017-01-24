UPDATE users
SET password = $2,
where id = $1;
