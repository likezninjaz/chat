$(document).ready(function() {
    var conn = new WebSocket('ws://176.114.3.10:8001');
    var userName='Username';

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