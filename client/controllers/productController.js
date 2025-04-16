import db from "../config/database.js";

export const addProduct = async (req, res) => {
  const { name, quantity, price } = req.body;
  const photo = req.file ? req.file.path : null;

  try {
    const [result] = await db.execute(
      "INSERT INTO products (name, quantity, photo, price) VALUES (?, ?, ?, ?)",
      [name, quantity, photo, price]
    );

    res.status(201).json({
      message: "Product added successfully",
      productId: result.insertId,
      photo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add product" });
  }
};
