A-Fullstack- Grocery List
Fullstack - Grocery List

To create a full stack MERN application.

Use create-react-app and express-generator to setup skeleton for the frontend and backend.

Backend:

1. Set up /grocery route, connect router, controller and model

2. Create a grocery Model that has the following-
* grocery: String
* purchased: Boolean
* Date: Date.now

3. Set up all the functionalities in the Controller for these Routes:
* /get-all-groceries
* /create-grocery
* /update-grocery-by-id
* /delete-grocery-by-id

Frontend:

Similar set up to the todo app:

1. Should have an input text to add grocery list items.

2. After each item is added, you can see the grocery item below with 3 option buttons of edit, purchased and delete next to it
* Edit should toggle the grocery item to be able to edit and submit
* Purchased should toggle the grocery item to be crossed out if its purchased
* Delete should delete the grocery item from the list

3. Above the list of items, there should be 4 sorting options
* Sort by date added- Oldest to Newest
* Sort by date added- Newest to Oldest
* Sort by Purchased
* Sort by Not Purchased

Extra Credit- Add a checkbox next to each grocery list item called priority. If the checkbox is checked, the item should automatically go to the top and if it is unchecked, it should go back down the list. Think about what is needed in the front and back.

***Frontend and backend should have its own repo. Submit BOTH repo links in Essay.
***Use meaningful variable names
***Make components, folders and files as needed (Do not put everything in one file)


---
# Steps for Building a Full Stack App
## Back end


* Install Express
* Install Mongoose
* Install cors
* Uninstall ejs
* Open in vs code
* Delete public and views folders
* Change the port to 3001 from 3000 in the bin folder, JS www file.
* In app.js delete "path stuff", and the "views" stuff, bring in mongoose, bring in cors.
* In app.js, type the following code to make sure mongoose is connected, name the database accordingly.
```
mongoose
  .connect("mongodb://localhost:27017/todo-backend", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((e) => {
    console.log(e);
  });
```
* In app.js, bring in the router, call express with the variable "app", app.use cors, logger, express.json, express, urlencoded, cookieParser.
* In app.js, change route to the router by adding the "/api" path.
* In app.js, change the response to a json message. All of the above directions look like the following block of code;
```
var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");
mongoose
  .connect("mongodb://localhost:27017/todo-backend", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((e) => {
    console.log(e);
  });
var todoRouter = require("./routes/todo/todoRouter");
var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/todos", todoRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json("error", err);
});
module.exports = app;
```
* In the routes folder, delete users.js(or index.js--won't need both)
* Rename one js file that's left (either the index or users) to ___Router.js, in this case it's "groceryRouter.js".  
* In ____Router.js, change the response to a json--"res.json(true);"
* In routes, create another folder named what you like for the project, in this case it's "grocery".
* Inside the newly created folder, make 2 more folders named "controller" and "model".
* Move the ___Router.js (groceryRouter.js) file to the newly created folder that the controller and model are nested in.
* In model folder, create a Model.js file, first letter capitalized (Grocery.js), then create your schema. MAKE SURE THE NAME IS UNIQUE TO THE PROJECT AT MODULE.EXPORTS!!! The schema should look like the following code, based on the to-do app we built previously;
```
const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  dateAdded: {
    type: Date,
    default: () => Date.now(),
  },
});
module.exports = mongoose.model("todo", todoSchema);

```
* In the controller folder, create a ____Controller.js (groceryController.js) and bring in the route to the model at the top in a variable.(up one level to the model folder, then the js file inside with the schema) `(const Todo = require("../model/Grocery");` Add `module.exports = {};` at the bottom of the file.
* Go through the files and change all instances of var to const.(best practices?)
* In app.js, bring in the _____Router.js (groceryRouter.js)
* "Tell the app to use the ____Router.js (app.use("/api/grocery", groceryRouter))
* Start nodemon and see if "MongoDB is connected" is logged in the console. ;)
* Begin working in the router file and controller file,  building the 'crud' functionality of the app, making sure to properly bring in all functions from the controller to the router and properly export all functions in the controller.
* One by one, check with the app called 'post man' to see if http requests work properly.

---
## Front End

* start react app in terminal using the generator `npx create-react-app name-of-the-project`
* Delete the things you do not need. (tests, webVitals-in all areas, logos, favicon, app.test)
* In source folder, create a folder called 'components' for further use.
* Inside components, create a folder with a name that represents a collection of your first components.  The name should be capitalized.
* in app.js, delete everything, type rce, hit enter.
* `npm i proptypes axios`
* `npm start` with something typed in app.js, just to see if it's running in the browser.   
* create a state in app.js similar to the todo app state as follows;
```
  state = {
    groceryList: [],
    groceryInput: "",
    error: null,
    errorMessage: "",
  };
* Using the `componentDidMount()` and axios

