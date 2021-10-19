create database data;

use data;

create table accounts(
    account_num int primary key auto_increment,
    username char(75) unique,
    password varchar(256)
);

commit;
