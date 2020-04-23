var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(process.env.PORT || 5000);
console.log(process.env.PORT);
