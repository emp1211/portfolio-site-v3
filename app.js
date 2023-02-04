const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const ejs = require('ejs');

// Serve static files
const publicDir = path.join(__dirname, "./public");
app.use(express.static(publicDir));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");



app.get('/', (req, res) => {
    res.render("index");
});


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})