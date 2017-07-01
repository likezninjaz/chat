$(document).ready(function() {
	var inputField=$('.chat-conversation-input-field'),
		inputButton=$('.chat-conversation-input-send'),
		inputStiker=$('.chat-conversation-input-stiker'),
		messagesList=$('.chat-conversation'),
		chatWindow=$('.chat-conversation'),
		userPhoto='images/profile_photo2.jpg';


	/*inputClear();

	function chatScrollBottom(length) {
		chatWindow.scrollTop(length++);
	}

	function messageOut (message) {
		messagesList.append('<li class="chat-conversation-message outcoming">' + 
            '<span class="chat-conversation-message-text">' + message + '</span>' +
            '<img src="' + userPhoto + '" class="chat-conversation-message-photo" />' + 
            '</li>');

		chatWindow.scrollTop(10000); //
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
	});*/

	inputButton.hover(function() {
		$(this).css({cursor:'pointer'});
	});

/*	inputButton.click(function() {
		if (inputField.val() != '') {
	    		messageOut(inputField.val());
	    		inputClear();
	    	}
	}); */

	inputStiker.hover(function() {
		$(this).css({cursor:'pointer'});
	});

	inputStiker.click(function() {
		alert('Show window with stikers');
	});

});