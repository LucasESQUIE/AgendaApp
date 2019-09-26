// libraries imports
const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


const events = require('./routes/api/events');
const users = require('./routes/user');

app.use('/api/events', events);
app.use('/users', users);

app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
});