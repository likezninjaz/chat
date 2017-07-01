$(document).ready(function() {
	var $recentFilesGallery=$('.profile-files-gallery'),
		$recentFilesScroll=$('.profile-files-header-scroll'),
		$recentFilesScrollRight=$('.profile-files-header-scroll-right'),
		$recentFilesScrollLeft=$('.profile-files-header-scroll-left'),
		$recentFilesImage=$('.profile-files-gallery-image');

	$recentFilesScroll.hover(function() {
		$(this).css({cursor:'pointer'});
	});

	$recentFilesImage.hover(function() {
		$(this).css({cursor:'pointer'});
	});

	$recentFilesScrollLeft.click(function() {
		$recentFilesImage.animate({left: '-=50px'}, 800);
	});

	$recentFilesScrollRight.click(function() {
		$recentFilesImage.animate({left: '+=50px'}, 800);
	});
});
