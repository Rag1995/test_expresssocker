
const app = require('express')();
const server = require('http').createServer(app);
const port = process.env.PORT || 5050;
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log(`user [${socket.id}] connected`)
    socket.on('disconnect', socket => {
        console.log(`user [${socket.id}] go out`);
    });
});

app.get('/', (req, res) => {
    res.status(200).send('Hello, World.');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});