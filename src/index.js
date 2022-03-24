const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const route = require('./routes/index');
const db = require('./config/db/index');
const methodOverride = require('method-override');
const exp = require('constants');
const SortMiddleware = require('./app/middlewares/SortMiddleware');
const app = express();
const port = 3000;

//Middleware
app.use(SortMiddleware);

//Urlencoded
app.use(express.urlencoded());

//Method Override
app.use(methodOverride('_method'));

//Set Static File
app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a,b) => a + b,
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default'
        
        const icons = {
          default: 'far fa-sort-circle',
          asc: 'fas fa-sort-amount-down-alt',
          desc: 'fas fa-sort-amount-up-alt',
        };

        const types = {
          default: 'desc',
          asc: 'desc',
          desc: 'asc',
        };

        const icon = icons[sortType];
        const type = types[sortType];

        return `<a href="?_sort&column=${field}&type=${type}">
        <i class="${icon}"></i>
        </a>`
      }
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//HTTP Logger
app.use(morgan('combined'));

//Connect Database
db.connect();

//Routes
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});