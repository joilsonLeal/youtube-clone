import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ message: 'youtube-clone' });
})

app.listen(3333);
