const express = require('express');
const http = require('http');
const cors = require('cors');
const { registerSocketServer } = require('./socket/socketServer');
require('dotenv').config();


//server setup
const app = express();
const server = http.createServer(app);
registerSocketServer(server);


//middleware

app.use(cors());
app.get('/', (req, res) => {
    res.send({ response: 'ok' })
})

const PORT = process.env.port || 5004;
server.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});