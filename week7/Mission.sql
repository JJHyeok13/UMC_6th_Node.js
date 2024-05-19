CREATE TABLE Member (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  birthday DATE NOT NULL,
  address VARCHAR(255) NOT NULL,
  email VARCHAR(50) NOT NULL,
  social_type VARCHAR(10) NOT NULL,
  point INT NOT NULL DEFAULT 0,
  created_at DATETIME(6) NOT NULL,
  updated_at DATETIME(6) NOT NULL
);

CREATE TABLE FoodType (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  created_at DATETIME(6) NOT NULL,
  updated_at DATETIME(6) NOT NULL
);

CREATE TABLE Region (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  created_at DATETIME(6) NOT NULL,
  updated_at DATETIME(6) NOT NULL
);

CREATE TABLE Restaurant (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  foodtype_id BIGINT NOT NULL,
  region_id BIGINT NOT NULL,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(255) NOT NULL,
  created_at DATETIME(6) NOT NULL,
  updated_at DATETIME(6) NOT NULL,
  FOREIGN KEY (foodtype_id) REFERENCES FoodType(id),
  FOREIGN KEY (region_id) REFERENCES Region(id)
);

CREATE TABLE Review (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  member_id BIGINT NOT NULL,
  restaurant_id BIGINT NOT NULL,
  content VARCHAR(255) NOT NULL,
  created_at DATETIME(6) NOT NULL,
  updated_at DATETIME(6) NOT NULL,
  FOREIGN KEY (member_id) REFERENCES Member(id),
  FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id)
);

CREATE TABLE ReviewImage (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  review_id BIGINT NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  created_at DATETIME(6) NOT NULL,
  updated_at DATETIME(6) NOT NULL,
  FOREIGN KEY (review_id) REFERENCES Review(id)
);

CREATE TABLE Mission (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  restaurant_id BIGINT NOT NULL,
  region_id BIGINT NOT NULL,
  point INT NOT NULL,
  deadline DATETIME,
  created_at DATETIME(6) NOT NULL,
  updated_at DATETIME(6) NOT NULL,
  FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id),
  FOREIGN KEY (region_id) REFERENCES Region(id)
);

CREATE TABLE MemberMission (
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  member_id BIGINT NOT NULL,
  mission_id BIGINT NOT NULL,
  restaurant_id BIGINT NOT NULL,
  created_at DATETIME(6) NOT NULL,
  updated_at DATETIME(6) NOT NULL,
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
