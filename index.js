const express = require('express');
const PORT = process.env.PORT || 8001;
const app = express();
const router = require('./backend/routes/routes');
require('dotenv').config();

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`The Dungeon Master is listening on port ${PORT}`);
})