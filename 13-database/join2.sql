create table instructor (
  id int primary key, 
  name VARCHAR(7),
  dept_name VARCHAR(7),
  salary int 
);

create table teaches (
  id int primary key, 
  course VARCHAR(7),
  semester VARCHAR(7),
  year int
);

insert into instructor values (1, 'james', '심리', 95000);
insert into instructor values (2, 'john', '컴공', 95000);

insert into teaches values (1, '운영체제', '봄', '2022');
insert into teaches values (2, '상담심리', '가을', '2023');

-- INNER JOIN
select * from instructor join teaches;  -- CROSS;
select * from instructor I join teaches T on I.id=T.id; -- INNER JOINs

/*
  Outer Join은 공통된 부분만 결합하는 Inner Join과 다르게 공통되지 않은 row도 유지한다. 
  이때, 왼쪽에 있는 테이블에 row를 유지하면 Left (Outer) Join,
  오른쪽 테이블의 row를 유지하면 Right (Outer) Join, 
  양쪽 테이블의 row를 모두 유지하면 Full Outer Join
*/

delete from teaches where id <= 2;

insert into instructor values (3, 'mark', '수학', 75000);
insert into instructor values (4, 'tom', '심리', 90000);
insert into teaches values (3, '인공지능', '봄', '2022');
insert into teaches values (4, '사회심리', '가을', '2023');
insert into teaches values (5, '네트워크', '봄', '2022');   
insert into teaches values (6, '알고리즘', '가을', '2023');

-- LEFT OUTER JOIN
select * from instructor I left outer join teaches T on I.id = T.id;

-- RIGHT OUTER JOIN
select * from instructor I right outer join teaches T on I.id = T.id;