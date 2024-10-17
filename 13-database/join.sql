-- JOIN
select * from customer; 
select * from orders; 
select * from customer, orders;

-- customer, orders 테이블의 행 개수 구하기 
select count(*) from customer;
select count(*) from orders
select count(*) from customer, orders
-- => cross join

-- where 절을 이용해 조인 조건 추가 
-- 테이블이름.속성 : 어느 테이블의 속성인지 가리킴
select * from customer, orders where customer.custid = orders.custid;
select * from customer, orders where customer.custid = orders.custid order by customer.custname;

select * from customer inner join orders on customer.custid = orders.custid;

-- '고객 이름'과 고객이 주문한 '상품명', '상품 가격' 조회
-- 고객 이름 : customer 테이블
-- 상품명, 상품 가격 : orders 테이블
select custname, prodname, price from customer, orders
where customer.custid = orders.custid;

-- 고객 이름별로 주문한 제품 총 구매액을 고객별로 오름차순 정렬
select custname, sum(price * amount) as 'total_price'
from customer, orders
where customer.custid = orders.custid
group by custname
order by total_price;
