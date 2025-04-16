# Database and Environment Configuration

## MySQL Setup

````sql
CREATE DATABASE demoDatabase;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    profile_photo VARCHAR(255)
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL DEFAULT 0,
    photo VARCHAR(255),
    price DECIMAL(10,2) NOT NULL
);


## Environment Configuration

Create a `.env` file in your project's root directory with the following configuration:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=demoDatabase
PORT=8080
JWT_SECRET=your_jwt_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
````
