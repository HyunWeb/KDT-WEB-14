-- 데이터 베이스 : 데이터의 집합
-- DBMS: 데이터베이스를 운영/관리하는 프로그램 (ex.MySQL)
-- 테이블 : 하나 이상의 열과 행으로 구성된 데이터베이스의 최소 단위 
-- SQL: RDBMS에서 사용되는 언어 (데이터베이스를 구축하고 관리하고 활용하기 위한 언어)
-- 참고! SQL은 대소문자를 구별하지 않는다. 
-- 명령어를 구분하기 쉽게 하기 위해 대문자로 작성하는 것 (필수 X)
-- 단, 데이터베이스명, 테이블명 같은 경우 윈도우에서는 대소문자 구분하지 않지만, 
-- 그 외 리눅스 환경에서는 대소문자를 구분한다.  (주의 필요)

-- DDL (Data Definition Language)
-- 데이터베이스, 테이블을 정의하는 언어 

-- [DataBase 관련 명령어]
-- 1. DataBase 생성
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

-- 2. Database 목록조회
SHOW DATABASES;

-- 3. Database 사용 선언
USE kdt;

-- 4. Database 삭제
DROP DATABASE kdt;

-- [Table 관련 명령어]
-- 1. 테이블 생성
-- 제약조건 ("옵션")
-- NOT NULL : NULL 허용 X
-- AUTO_INCREMENT : 자동 숫자 증가, 테이블에 데이터 추가될 때마다 자동으로 숫자 증가
-- PRIMARY KEY : 기본키 (중복값 허용X) -> 하나의 테이블당 하나만!
-- DEFAULT 기본값 : 특정 속성의 기본 값 설정
-- UNIQUE : 중복 허용 X, NULL 허용

CREATE TABLE product (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  model_number VARCHAR(15) NOT NULL,
  series VARCHAR(30) NOT NULL
);

-- 2. 테이블 목록 확인
-- 현재 사용중인 데이터베이스의 모든 테이블 조회
SHOW TABLES;

-- 3. 테이블 구조 확인
--  테이블의 컬럼 정보 (자료형, NULL 여부, KEY, DEFAULT 등)
DESC product;

-- 4. 테이블 정의 수정
-- 이미 테이블을 만들었고, 테이블에 데이터가 추가되었을 때 
-- 컬럼 정보가 바뀌어야 하는 경우에 사용

-- 4-1. 컬럼 추가
ALTER TABLE product ADD new_column DATE;

-- 4-2. 컬럼 수정
ALTER TABLE product MODIFY new_column INT;

-- 4-3. 컬럼 삭제 
ALTER TABLE product DROP new_column;

-- 5. 테이블 삭제
-- DROP: 테이블 존재 자체를 없앰
DROP TABLE product;
-- TURNCATE : 테이블 구조만 남겨놓고 모든 행 삭제 
TRUNCATE TABLE product;