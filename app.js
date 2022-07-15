const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;
const morgan = require('morgan')
const { loadContact } = require('./utils/contact');

app.set('view engine', 'ejs');
app.use(expressLayouts);

// middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

// built in middleware
app.use(express.static('public'))

// 3rd party middleware
app.use(morgan('dev')); 

app.get('/', (req, res, next) => {
    res.render('index',
        {
            nama: 'Alya',
            title: 'Webserver EJS',
            layout: 'layout/main-layout',
        });
});

app.get('/about', (req, res, next) => {
    res.render('about', { title: 'about', layout: 'layout/main-layout', });
});

app.get('/contact', (req, res, next) => {
    const contact = loadContact();
    res.render('contact', { 
        title: 'contact',
        layout: 'layout/main-layout',
        contact,
    });
});

app.get('/product/:id?', (req, res) => {
    res.send(`product id : ${req.params.id} <br> category id : ${req.query.category}`);
});

app.use('/', (req, res) => {
    res.status(404)
    res.send('Not Found 404')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});