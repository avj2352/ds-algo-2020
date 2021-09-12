const path = require('path');
const express = require('express');

const app = express();
const PORT = 5000;

app.use('/', express.static(path.join(__dirname,'public')));

const server = app.listen(PORT, ()=>{console.log(`Server listening at ${server.address().port}`);});
