create database data;

use data;

create table accounts(
    account_num int primary key auto_increment,
    username char(75) unique,
    password varchar(256)
);

create table content(
    id int primary key auto_increment,
    postname varchar(200) not null,
    main text(500) not null 
);

ALTER TABLE content CONVERT TO CHARACTER SET utf8;

desc content;
desc accounts;

commit;
