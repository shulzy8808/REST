const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('I just changed the port')
})

app.listen(3001, () => {
    console.log('Hi Work please')
})
