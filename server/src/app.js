const express = require("express");

const app = express();

app.use(express.json());

const [PORT, HOST] = [6000, "127.0.0.1"]

app.get("/users", (req, res) => {
    const users = [];
    res.status(200), send ({
        success: true,
        data: {
            users,
        },
    });
});

app.listen(PORT, HOST, () => {
    console.info('The application is up and running on http:${HOST}:${PORT}')
});