$(document).ready(function() {
	var $tabAuth=$('.form__tabs__auth'),
		$tabReg=$('.form__tabs__reg'),
		$formAuth=$('.form__auth'),
		$formReg=$('.form__reg');

	$tabReg.click(function() {
		$(this).css({
			"background-color":"#4caf50",
			"color":"white",
			"border-radius":"0 5px 0 0"
		});

		$tabAuth.css({
			"background-color":"white",
			"color":"#90a4ae"
		});

		$formReg.show();
		$formAuth.hide();
	});

	$tabAuth.click(function() {
		$(this).css({
			"background-color":"#4caf50",
			"color":"white",
			"border-radius":"5px 0 0 0"
		});

		$tabReg.css({
			"background-color":"white",
			"color":"#90a4ae"
		})

		$formAuth.show();
		$formReg.hide();
	});
});