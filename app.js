import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send("Hello Veti");
});

export default app;