$( () => {
    var socket = io();

    socket.on('message', addMessage);

    $("#send").click( () =>{
        var message = {name: $("#name").val(), message:$("#message").val()};
        postMessage(message);
    });

    getMessages();
});

function addMessage(message){
    $("#messages").append(`<h4> ${message.name}</h4>
                            <p>${message.message}</p>`);
}

function getMessages(){
    $.get('http://localhost:3000/messages', (data)=>{
        data.forEach( element => {
            addMessage(element);
        });
    });
}

function postMessage(message){
    $.post('http://localhost:3000/messages', message );
}