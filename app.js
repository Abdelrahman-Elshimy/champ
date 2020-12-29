const express = require('express');
const path = require('path');

const app = express();

// use static files
app.use(express.static(path.join(__dirname, 'assets')));

// install view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res, next) => {
    res.send('Home Done');
});

// create server
app.listen(3000, (err) => {
    console.log('server listen on port 3000');
});