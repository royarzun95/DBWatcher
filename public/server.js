import express from "express";

const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('Welcome to my server! YEAH');
});

app.listen(port, () => {
    console.log(`Server is running on port titita : localhost:${port}`);
});