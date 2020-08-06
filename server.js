const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const fs = require('fs');

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use(express.static('public'));

for(let route of fs.readdirSync('routes')) {
    app.use('', require('./routes/' + route));
}

app.listen(3000, function() {
    console.log('Server started at 3000');
});
