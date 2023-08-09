Installation
Clone this repository to your local machine using:

bash
Copy code
git clone https://github.com/your-username/your-todo-app.git
Navigate to the project directory:

bash
Copy code
cd your-todo-app
Install the required dependencies using npm:

Copy code
npm install
Make sure you have MongoDB installed and running. Update the config.js file with your MongoDB connection details.

Start the application:

sql
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to use the To-Do List app.

Features
Add new tasks with a title and optional description.
View your tasks in a list format.
Mark tasks as completed.
Edit task details.
Delete tasks.
Technologies Used
MongoDB: A NoSQL database used to store task data.
Node.js: The runtime environment for executing JavaScript code on the server.
Express: A web application framework for building robust APIs and web applications.
EJS (Embedded JavaScript): A templating engine used to generate dynamic HTML content.
Project Structure
app.js: The main entry point of the application where server setup and routes are defined.
views/: Contains EJS templates for rendering HTML.
public/: Contains static files like CSS and client-side JavaScript.
controllers/: Contains route handlers and business logic.
models/: Defines the MongoDB data models.
Usage
Open the app in your browser.
Add new tasks by entering a title and optional description, then click "Add Task."
View your tasks in the list.
Mark tasks as completed by clicking the checkbox.
Edit tasks by clicking the "Edit" button, and save changes.
Delete tasks by clicking the "Delete" button.
