         $(document).ready(function() {
        var conn = new WebSocket('ws://localhost:8000');
        var chatForm = $(".chat-form"),
        	messageInputField=chatForm.find('#message'),
        	messagesList=$(".message-list");


        chatForm.on("submit", function(event) {
        	event.preventDefault();
        	/* Act on the event */
        	var message =  messageInputField.val();
        	conn.send(message);
        	messagesList.prepend('<li>' + message + '</li>');
        });


        conn.onopen = function(e){
            console.log('connection established');
                 $.ajax({
            url: 'load_history.php',
            dataType: 'json',
            success: function(data){
                $.each(data, function(){
                    messagesList.prepend('<li>' +this.text + '</li>');
                })
            }

        })
            
        };

        conn.onmessage = function(e){
            console.log(e.data);
            messagesList.prepend('<li>' + e.data + '</li>');
        };

      
       	
       });

