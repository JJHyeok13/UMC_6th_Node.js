CREATE TABLE Member (
    id          BIGINT NOT NULL AUTO_INCREMENT primary key,
    name        varchar(20)   not null,
    gender      varchar(10)   not null,
    birthday    varchar(255)  not null,
    addr        varchar(255)  not null,
    specAddr    varchar(255)  not null,
    phone       varchar(255)  not null,
    email       varchar(50)   not null,
    social_type varchar(10)   not null,
    point       int default 0 not null
);

create table FoodType (
    id   BIGINT NOT NULL AUTO_INCREMENT primary key,
    name varchar(20) not null
);

CREATE TABLE Region (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
);

CREATE TABLE Restaurant (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  foodtype_id BIGINT NOT NULL,
  region_id BIGINT NOT NULL,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(255) NOT NULL,
  FOREIGN KEY (foodtype_id) REFERENCES FoodType(id),
  FOREIGN KEY (region_id) REFERENCES Region(id)
);

CREATE TABLE Review (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  member_id BIGINT NOT NULL,
  restaurant_id BIGINT NOT NULL,
  content VARCHAR(255) NOT NULL,
  rating DOUBLE NOT NULL,
  FOREIGN KEY (member_id) REFERENCES Member(id),
  FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id)
);

CREATE TABLE Mission (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  restaurant_id BIGINT NOT NULL,
  region_id BIGINT NOT NULL,
  point INT NOT NULL,
  deadline DATETIME,
  FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id),
  FOREIGN KEY (region_id) REFERENCES Region(id)
);

CREATE TABLE MemberMission (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  member_id BIGINT NOT NULL,
  mission_id BIGINT NOT NULL,
  restaurant_id BIGINT NOT NULL,
  FOREIGN KEY (member_id) REFERENCES Member(id),
  FOREIGN KEY (mission_id) REFERENCES Mission(id),
  FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id)
);

CREATE TABLE MemberFoodType (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  member_id BIGINT NOT NULL,
  foodtype_id BIGINT NOT NULL,
  FOREIGN KEY (member_id) REFERENCES Member(id),
  FOREIGN KEY (foodtype_id) REFERENCES FoodType(id)
);
