export const getRestaurantById = `SELECT * FROM restaurant WHERE id = ?`;

export const insertRestaurant = `INSERT INTO restaurant (foodtype_id, region_id, name, address) VALUES (?, ?, ?, ?)`;

export const getReviewById = `SELECT * FROM review WHERE id = ?`;

export const insertReview = `INSERT INTO review (member_id, restaurant_id, content, rating) VALUES (?, ?, ?, ?)`;
