export const getRestaurantById = `SELECT * FROM Restaurant WHERE id = ?`;

export const insertRestaurant = `INSERT INTO Restaurant (name, address, region_id, foodtype_id) VALUES (?, ?, ?, ?)`;

export const confirmRestaurant = `
    SELECT EXISTS (
        SELECT 1
        FROM Restaurant
        GROUP BY name, address
        HAVING COUNT(*) > 1
    ) AS isExistRestaurant;
`;

export const getReviewById = `SELECT * FROM Review WHERE id = ?`;

export const insertReview = `INSERT INTO Review (member_id, restaurant_id, content, rating) VALUES (?, ?, ?, ?)`;
