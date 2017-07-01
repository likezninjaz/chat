$(document).ready(function() {
	var $tab=$('.contacts-list-tabs-tab'),
		$tabRecent=$('.contacts-list-tabs-tab-recent'),
		$tabAll=$('.contacts-list-tabs-tab-all');

	$tab.hover(function() {
		$(this).css({cursor:'pointer'});
	});

	$tab.click(function() {
		if ($(this).hasClass('contacts-list-tabs-tab-recent') && $(this).hasClass('tab-inactive')) {
			$(this).removeClass('tab-inactive');
			$(this).addClass('tab-active');
			$tabAll.removeClass('tab-active');
			$tabAll.addClass('tab-inactive');
			//add function for recent contacs rendering
		}
		else {
			$(this).removeClass('tab-inactive');
			$(this).addClass('tab-active');
			$tabRecent.removeClass('tab-active');
			$tabRecent.addClass('tab-inactive');
			//add function for all contacs rendering
		}
	});
});
