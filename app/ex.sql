create database ssd default character set utf8 collate utf8_general_ci;

create table ssd.content(
id int primary key auto_increment,
postname varchar(200) not null,
main text(500) not null 
);

desc ssd.content;
select * from ssd.content;

ALTER TABLE ssd.content CONVERT TO CHARACTER SET utf8;


