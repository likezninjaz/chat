$(document).ready(function() {
	$('.contacts-user-edit').hover(function() {
		$(this).css({cursor:'pointer'});
	});

	$('.contacts-user-edit').click(function() {
		alert('Do you want to change your profile info, dude?');
	});
});