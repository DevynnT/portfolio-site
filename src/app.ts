import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.send("home page");
});

app.get('/yo', (req, res) => {
    res.render("index");
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}/`))