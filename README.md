# Node-farm-project
# Node.js Project README

This Node.js project is a simple web server for displaying food product information using HTTP requests. It serves dynamic HTML content based on requested URL paths.

## Project Structure

- `index.js`: The main application file.
- `modules/dynamictemplate.js`: Custom module for generating dynamic HTML templates.
- `templates/overview_template.html`: HTML template for the overview page.
- `templates/one_box_template.html`: HTML template for individual product boxes.
- `templates/product.html`: HTML template for displaying a specific product.
- `dev-data/data.json`: JSON data file containing food product information.

## Installation

1. Clone the repository to your local machine.
2. Install the required dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install

Usage
Start the server by running:

node index.js

Access the following routes in your browser:

Overview: http://localhost:8000/overview
Individual Product: http://localhost:8000/product?id=<product_id>
Routes
/overview or /: Displays an overview of food products.
/product?id=<product_id>: Displays detailed information for a specific product based on its ID.
Dependencies
fs: For reading files from the file system.
http: For creating the web server.
url: For parsing URLs.
dynamictemplate.js: A custom module for generating dynamic HTML content.
data.json: JSON data file containing product information.
Project Status
This is a basic Node.js project for educational purposes and can be extended or customized for specific use cases.

License
This project is available under the MIT License.

Contact
If you have any questions or feedback, feel free to reach out:

Email: your.email@example.com
Enjoy exploring the food product information with this simple Node.js project!
