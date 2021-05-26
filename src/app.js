const express = require('express');
const app = express();

const path = require('path');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const routers = require('./routes');

const port = 3000;

//HTTP logger
app.use(morgan('combined'));

//Template engin
app.engine('hbs',exphbs({extname: ".hbs"}));
app.set('view engine','.hbs');
app.set('views', path.join(__dirname,'resources/views'));

console.log("PATH: " +__dirname);

//References to css,js,img,...
app.use(express.static( path.join(__dirname,'resources/public')));

routers(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})