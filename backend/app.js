const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

let i = 0; 

app.get('/addtask', (request, response) => {
    i += 1;
    response.send({addedtask: i});
})

app.listen(port, () => {
    console.log(`We're live on port ${port}!`);
})
