const express = require('express');
const path = require('path');

const app = express();

//Set static folder
app.listen(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started in port ${PORT}`));
