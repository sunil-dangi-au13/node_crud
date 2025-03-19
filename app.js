const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

app.get('/', (req, res) => res.render('index'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
