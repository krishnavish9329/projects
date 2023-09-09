create database login;
use login;

create table login
(
Username varchar(30) primary key,
email varchar(40),
password1 varchar(30),
password2 varchar(30),
gender varchar(10)
);

insert into login 
values
('krishna','krishna@gmail.com','12345','12345','m'),
('sangam','sangam@gmail.com','12345','12345','m'),
('rohit','rohit@gmail.com','67890','67890','m');

select * from login;

delete from login where  Username='krishna';

delete from login ;

drop table login