$(document).ready(function() {
    var conn = new WebSocket('ws://176.114.3.10:8001');
    var chatForm = $(".chat"),
    	   messageInputField=chatForm.find('.chat-conversation-input-field'),
    	   messagesList=$(".chat-conversation"),
        userName='Username';
        userPhoto='images/profile_photo.jpg';

    chatForm.on("submit", function(event) {
    	event.preventDefault();
    	var message = {
            text: messageInputField.val(),
            sender: $.cookie(userName),
            type: 'message'
        }
        messageInputField.val();
    	conn.send(JSON.stringify(message));
    	messagesList.prepend('<li class="chat-conversation-message outcoming">' + 
            '<span class="chat-conversation-message-text">' + message.text + '</span>.' +
            '<img src="' + userPhoto + '" class="chat-conversation-message-photo" />' + 
            '</li>');
    });

    conn.onopen = function(e){
        console.log('connection established');
             $.ajax({
        url: 'load_history.php',
        dataType: 'json',
        success: function(data){
            $.each(data, function(){

                if(this.sender == $.cookie('chat_name')){
                    messagesList.prepend('<li class="label label-success">' + this.text + '</li>');
                }
                messagesList.prepend('<li>' +this.text + '</li>');
            })
        }
    })
        var chatName= $.cookie('chat_name');

        if(!chatName){
            var timestamp = (new Date()).getTime();
            chatName = 'anonymous' + timestamp;
            $.cookie('chat_name', chatName);
            }
        $('.userName').text(chatName);
    };

    conn.onmessage = function(e){
        console.log(e.data);
        messagesList.prepend('<li>' + e.data + '</li>');
    };
});