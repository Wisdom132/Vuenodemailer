require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const app = express();

require("./config/db")(app);


app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({
        message: 'Vue Mailer Application 😎😎 '
    });
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});