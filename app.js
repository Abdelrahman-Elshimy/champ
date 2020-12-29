const express = require('express');
const path = require('path');
const adminHomeRoutes = require('./routes/admin/home.routes');

const app = express();

// use static files
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'images')));

// install view engine
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(adminHomeRoutes);

// create server
app.listen(3000, (err) => {
    console.log('server listen on port 3000');
});
