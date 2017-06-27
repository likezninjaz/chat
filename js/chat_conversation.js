$(document).ready(function() {
	var inputField = $('.chat-conversation-input-field'),
		messagesList=$('.chat-conversation'),
		chatWindow=$('.chat-conversation'),
		userPhoto='images/profile_photo2.jpg';


	inputClear();

	function chatScrollBottom(length) {
		chatWindow.scrollTop(length++);
	}

	function messageOut (message) {
		messagesList.append('<li class="chat-conversation-message outcoming">' + 
            '<span class="chat-conversation-message-text">' + message + '</span>.' +
            '<img src="' + userPhoto + '" class="chat-conversation-message-photo" />' + 
            '</li>');

		chatWindow.scrollTop(10000); //



	/*	var message = {
            text: messageInputField.val(),
            sender: $.cookie(userName),
            type: 'message'
        }
    	conn.send(JSON.stringify(message));*/
	}

	function inputClear() {
		inputField.val('');
	}

	inputField.keydown(function(event){
		if (event.keyCode == 13) {
	    	if (inputField.val() != '') {
	    		messageOut(inputField.val());
	    		inputClear();
	    	}
		}
	});

	$('.chat-conversation-input-send').hover(function() {
		$(this).css({cursor:'pointer'});
	});
});