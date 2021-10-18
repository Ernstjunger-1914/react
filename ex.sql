create database appdata;

use appdata;

create table userdata(
    account_number int primary key auto_increment,
    userid varchar(50) unique,
    password varchar(256)
);

commit;

