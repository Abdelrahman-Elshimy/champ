const express = require('express');
const path = require('path');
const session = require('express-session');
const SessionStore = require('connect-mongodb-session')(session);

// Import Routes
const adminHomeRoutes = require('./routes/admin/home.routes');
const adminProductRoutes = require('./routes/admin/product.routes');
const adminUsersRoutes = require('./routes/admin/users.routes');

const app = express();

// use static files
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'images')));

// Connect DB To Session
const STORE = new SessionStore({
    uri: 'mongodb://localhost:27017/champ',
    collection: 'sessions'
})

// Configure Session
app.use(session({
    secret: 'This My Secret .....',
    saveUninitialized: false,
    store: STORE
}))

// install view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// External Routes
app.use(adminHomeRoutes);
app.use(adminProductRoutes);
app.use(adminUsersRoutes);

// create server
app.listen(3000, (err) => {
    console.log('server listen on port 3000');
});
