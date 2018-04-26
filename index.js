const knex = require('./db');
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3002;
const rappostRoutes = require('./routes/rapposts');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use('/rapposts', rappostRoutes);

const server = app.listen(PORT, () => {
    console.log(`Rap Blog: Listening on port no. ${PORT}`);
});

module.exports = {app, server};