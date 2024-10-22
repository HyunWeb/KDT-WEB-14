create table studyvisit (
  id int not null primary key auto-increment,
  name varchar(10) not null, 
  comment mediumtext
);

insert into studyvisit (name, comment) values ("홍길동", "내가 왔다.");
insert into studyvisit (name, comment) values ("이찬혁", "으라차차");

-- 사용자 계정 확인
select * from mysql.user;

-- user 생성
create user 'user'@'localhost' identified by '1234';

-- user 계정에 DB에 대한 권한 부여 (모든 DB에 접근 가능하도록)
grant all privileges on *.* to 'user'@'localhost' with grant option;