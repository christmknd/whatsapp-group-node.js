$(function() {
    //connection 
    var socket = io.connect("http://localhost:3000")

    //jquery 
    var message = $("#message")
    var username = $("#username")
    var send_message = $("#send_message")
    var send_username = $("#send_username")
    var chatroom = $("#chatroom")

    //username
    send_username.click(function(){
        socket.emit('change_username',{username : username.val()})
        console.log(username.val())
    })

    //ecrire un message
    
});

