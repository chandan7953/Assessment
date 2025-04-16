import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export async function dbConnection() {
  try {
    const conn = await db.getConnection();
    console.log('Successfully connected to MySQL database "db"');
    conn.release();
    return true;
  } catch (err) {
    console.error("Database connection failed:", err);
    return false;
  }
}

export default db;
