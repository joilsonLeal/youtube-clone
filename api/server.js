const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'youtube-clone' });
})

app.listen(3333);