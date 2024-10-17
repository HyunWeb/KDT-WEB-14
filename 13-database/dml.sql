CREATE TABLE customer (
  custid CHAR(10) PRIMARY KEY, 
  custname VARCHAR(10) NOT NULL, 
  addr CHAR(10) NOT NULL,
  phone CHAR(11),
  birth DATE
);


-- 외래키 제약 조건
-- 두 테이블 사이의 관계를 맺음
-- 기준 테이블: 기본키를 갖는 테이블 (customer)
-- 참조 테이블: 외래키가 있는 테이블 (orders)
-- 형식: foreign key (열_이름) references 기준_테이블(열_이름)
-- on update cascade: 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경
-- on delete cascade: 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제
create table orders (
	orderid int primary key auto_increment,
    custid char(10) not null, -- FK
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    foreign key (custid) references customer(custid) on update cascade on delete cascade
);

-- 테이블 삭제 순서!
-- customer, orders 테이블이 customer.custid를 기준으로 "관계"를 맺고 있다. 
-- customer 테이블에 존재하는 회원만 orders 테이블에 데이터로 추가가 될 수 있음
-- 만약 orders 테이블이 있는데, customer 테이블을 삭제 하면?
-- pk - fk 연결된 테이블은 외래키가 설정된 테이블 (참조 테이블) 먼저 삭제 

select * from customer;

-- INSERT 추가
insert into customer (custid, custname, addr, phone, birth) values
("lucky", "강해원", "미국 뉴욕", "01022223333", "2002-03-04");


insert into customer (addr, phone, birth, custid, custname) values
("대한민국 부산", "01012345678", "1997-02-23", "hello", "이지은");

insert into customer values("happy", "최시은", "일본 오키나와", "01012322392", "1990-03-02");

-- 여러 튜플 동시 추가
insert into customer values("luck2", "강해원", "미국 뉴욕", "01022235333", "2002-03-04"),
("hap45y", "최시은", "일본 오키나와", "01012322392", "1990-03-02"),
("hap435y", "최시3은", "일본 오키나와", "01012322392", "1990-03-02");

-- UPDATE 수정
-- custid가 happy인 고객의 주소를 대한민국 서울로 변경
update customer set addr = '대한민국 서울' where custid = 'happy';


-- DELETE 삭제
-- custid 가 happy인 고객의 정보를 table에서 삭제 
delete from customer where custid = 'happy';



-- SELECT 조회
select * from customer; -- * : 와일드 카드 

-- 모든 고객의 아이디를 검색한다.
select custid from customer;

-- 모든 고객의 아이디, 생년월일 검색
select custid, birth from customer;

-- 고객 테이블에 있는 모든 주소를 검색하되 중복 제거
-- DISTINCT : 중복 제거
select distinct addr from customer;

-- <WHERE 조건>
-- 비교: =, <, >, <=, >=
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL: IS NULL, IS NOT NULL
-- 복합조건: AND, OR, NOT

-- 비교
-- 고객 이름이 강해린인 고객의 생일 검색
select birth from customer where custname='강해린';

-- 고객 이름이 강해린이 아닌 고객들의 생일 검색
select birth from customer where custname!='강해린';

-- 사전순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색
select * from customer where custname > "박민지";

-- 범위
-- 1995년 이상 2000년 이하 출생 고객 검색
select * from customer where birth between '1995-01-01' and '2000-12-31';
select * from customer where birth between >= '1995-01-01' and birth <= '2000-12-31';

-- 집합
-- 주소가 서울 혹은 런던인 고객 검색
select * from customer where addr in ('대한민국 서울', '영국 런던');
select * from customer where addr = '대한민국 서울'or addr = '영국 런던';
-- 주소가 서울 혹은 런던이 아닌 고객 검색
select * from customer where addr not in ('대한민국 서울', '영국 런던');

-- 패턴
-- 주소가 미국 로스앤젤레스 인 고객을 검색
select * from customer where addr like '미국 로스앤젤레스';

-- 주소에 '미국'이 포함되어 있는 고객 검색
select * from customer where addr like '미국%';

-- 고객 이름에 두번째 글자가 "지"인 고객 점색
-- '_': 임의의 하나의 문자 
select * from customer where custname like '_지%';
select * from customer where custname like '_지'; -- 두글자 이름중 마지막이 "지 인 경우.

-- 고객 이름에 세번째 글자가 "수" 인 고객 검색
select * from customer where custname like '__수';

-- 복합조건
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색
select * from customer where addr like "대한민국%" and birth >= "2000-01-01";

-- 주소지가 미국이거나 영국인 고객 검색
select * from customer where addr like "미국%" or addr like "영국%";

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
select * from customer where phone not like "%4";

-- < ORDER BY >
-- order by 없음 : pk 기준으로 오름차순 정렬

select * from customer order by custname; 
select * from customer order by custname desc; 

-- where절과 order by 함께 사용 (이때, where보다 order by가 뒤에 위치해야 함)
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색
select * from customer where birth >= "2000-01-01" order by addr desc;

-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색 그리고 아이디를 기준으로 내림차순 검색
select * from customer where birth >= "2000-01-01" order by addr desc, custid desc;

-- < LIMIT >
-- 행의 개수를 제한
select * from customer where birth >= "2000-01-01" limit 2;

-- < 집계함수 >
-- 계산하여 어떤 값을 리턴 하는 "함수"
-- group by 절과 함께 쓰이는 케이스가 많음

-- 주문 테이블에서 상품의 총 판매 개수 검색
select sum(amount) from orders;

-- 주문 테이블에서 상품의 총 판매 개수 검색 + 의미 있는 열 이름으로 변경
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품의 최저가, 상품의 최고가 검색
select sum(amount) as 'total_amount', avg(amount) as 'avg_amount', 
min(price) as 'min_price', max(price) as 'max_price' from orders;

-- 주문 테이블에서 총 주문 건수 
select count(*) from orders;

--  주문 테이블에서 주문한 고객의 수 (중복 없이)
select count(distinct custid) from orders;

-- < GROUP BY >
-- "~별로"

-- 고객별로 주문한 주문 건수 구하기 
select custid, count(*) from orders group by custid;

-- 고객별로 주문한 상품 총 수량 구하기 
select custid, sum(amount) from orders group by custid;

-- 고객별로 주문한 총 주문액 구하기
-- 각 가격별로 주문 수량만큼 곱한걸 전부 더해라
select custid, sum(amount * price) from orders group by custid;

-- 상품별로 판매 개수 구하기 
select prodname, sum(amount) from orders group by prodname;

-- < HAVING >
-- group by 절 이후 추가 조건
-- 그룹에 대해서 필터링

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기 
select custid, sum(amount), sum(price * amount) from orders group by custid HAVING sum(price * amount) >= 10000;

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기 
-- (단, custid가 'bunny' 인 고객은 제외하고 출력할 것)
-- where, group by, having 모두 사용한 예시 
select custid, sum(amount), sum(price * amount) from orders 
where custid != 'bunny'
group by custid HAVING sum(price * amount) >= 10000;

-- group by 주의 사항
-- select 절에서 group by 에서 사용한 속성과 집계함수만 사용 가능

-- 실습 3
create table user (
  id VARCHAR(10) not null primary key,
  pw VARCHAR(20) not null,
  name VARCHAR(5) not null,
  gender ENUM("F", "M", "") default(""),
  birthday DATE not null,
  age int(3) not null default 0 
);

-- 실습 4
INSERT INTO user VALUES('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user VALUES('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user VALUES('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user VALUES('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user VALUES('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

-- 실습 5
select * from user order by birthday;
select * from user where gender = "M" order by name desc;
select id, name from user where birthday like '1990-%';
select * from user where birthday like '%-06-%' order by birthday;
select * from user where gender = 'M'and birthday like '1970%';
select * from user order by age desc limit 3;

select * from user where age >= 25 and age <= 50;
select * from user where age between 25 and 50 -- same;

update user set pw = '12345678' where id='hong1234';
delete from user where id = 'jungkrat';