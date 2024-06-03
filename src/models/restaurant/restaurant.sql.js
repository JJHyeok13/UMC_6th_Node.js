// ID 값으로 Restaurant 찾기
export const getRestaurantById = `SELECT * FROM Restaurant WHERE id = ?`;

// Restaurant 추가하기
export const insertRestaurant = `INSERT INTO Restaurant (name, address, region_id, foodtype_id) VALUES (?, ?, ?, ?)`;

// 중복되는 식당 확인하기
export const confirmRestaurant = `
    SELECT EXISTS (
        SELECT 1
        FROM Restaurant
        GROUP BY name, address
        HAVING COUNT(*) > 1
    ) AS isExistRestaurant;
`;

// ID 값으로 Review 찾기
export const getReviewById = `SELECT * FROM Review WHERE id = ?`;

// Review 추가하기
export const insertReview = `INSERT INTO Review (member_id, restaurant_id, rating, content) VALUES (?, ?, ?, ?)`;
