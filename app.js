const express = require('express')
const app = express() 

app.set('view engine','ejs')
app.use(express.static('public'))

//routage vers la view
app.get('/',(req,res) => {
    res.render('home')
})

//definition du port
server = app.listen(3000)

const io = require('socket.io')(server)

io.on('connect', (socket) => {
    console.log('un membre du groupe est connecté')

    socket.username = "Member";

    socket.on('change_username', (data) => {
        socket.username = data.username
        console.log(socket.username)
    })

    socket.on('new_message',(data) => {
        io.sockets.emit('new_message', {message: data.message, username: socket.username})
    })

    socket.on('typing',(data) => {
        socket.broadcast.emit('typing', {username: socket.username})
    })
})