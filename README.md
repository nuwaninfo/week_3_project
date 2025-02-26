
First Express server
This week will focus on back-end development. In this week you are going to create an express server that handles simple POST and GET requests and a simple webpage.

Note: It is highly recommended to use tsc-watch and nodemon to test your application easily. For example, "start": "tsc-watch --onSuccess \"nodemon dist/app.js\"". As a difference to the lecture videos, install nodemon locally to your project (without -g flag) so that CG is able to start your application.


Requirements and Scoring
1. Hello world route
Create a node.js server to port 3000 that you can start with "npm start" command (use npm init for example) and install express.js framework. Create a GET route to "/hello" that sends the following JSON object back to the client:

{

    msg: "Hello world!"

}

Note: To test routes without front-end, it is recommended to use an application such as usebruno or Postman.


2. ID echoing
Add a second GET route to "/echo/:id". This route should send the id back to the client in a JSON object in property "id". For example, if connecting to "/echo/dog" the backend would respond with: 

{ 

    id: "dog" 

} 


3. POST request
Create a POST route to "/sum". This route takes an array of numbers from the "numbers" property of the request body and sums them and sends them back to the client. 

example request: 

{ 

    numbers: [1, 2, 3] 

} 

example response: 

{ 
   sum: 6 

}

Note: it is advisable to use express.json() when dealing with POST requests: express.json()


4. Front-end and back-end communication
In this task you will add front-end to the application. In your directory structure add folder “public” to the root of your directory.
Inside “public” add “index.html” and “main.js”.
In your HTML file you should have a form with id “userForm”. Inside the form you should have two input fields for name and email with ids “name” and “email”.  
In the “main.js” file add some functionality to the HTML so that when form is submitted, it would send a POST request to “/users” endpoint.
Name and email should be sent as a json object to the back-end in the body element.

In your back-end install “path” module and connect your front-end with back-end using static files Create type “TUser” with attributes name (string) and email (string). Initialize an empty list of TUser type, which will serve as your data storage to save new users.
Finally, create the POST route to your back-end with the “/users” endpoint, which should create a new User from the request body, and append the new user to the list of Users.
Lastly return json message “User successfully added” to the front-end.

Note: When joining static files to the express server with TypeScript, note that during the execution the code is executed from the “dist” folder, this means that you most likely need to backtrack one step when joining public folder to the express server. Example: “../public”. 

Example directory structure:





5. Render all users in front-end
In your back-end code add GET route to the endpoint “/users”, which should return status code 201 and the user list as json to the front-end.

In your HTML file add button with id “getUsers” and unordered list (<ul>) with id “userList”. 

In your JavaScript file add functionality so that when the button is pressed, a GET request is done to the “/users” endpoint, and all of the names and emails will be listed in the unordered list as <li> elements. The users should be presented in a following format: “name - email”. Example below: 

