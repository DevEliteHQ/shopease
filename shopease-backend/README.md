
# ShopEase Backend

ShopEase is an e-commerce website backend built with Node.js. It uses MySQL as the database and Sequelize as the ORM.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Installation


1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/shopease-backend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd shopease-backend
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your database configuration:
    ```env
    NODE_ENV=development
    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASS=your_database_password
    DB_NAME=your_database_name
    DB_DIALECT='mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql'
    ```

5. Run the database migrations:
    ```bash
    npx sequelize-cli db:migrate
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. The server will be running on `http://localhost:3000`.

## API Endpoints

Here are some of the main API endpoints:

- `GET /products` - Retrieve a list of products
- `POST /products` - Create a new product
- `GET /products/:id` - Retrieve a specific product by ID
- `PUT /products/:id` - Update a specific product by ID
- `DELETE /products/:id` - Delete a specific product by ID

## Database Schema

The database schema includes the following tables:

- `Users` - Stores user information
- `Products` - Stores product information
- `Orders` - Stores order information
- `OrderItems` - Stores items within an order

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

