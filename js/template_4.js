//for navbar
	$(window).on('scroll',function()
	{
		if($(window).scrollTop() > 550)
		{
			$('#my-navbar').addClass('menu-bg');
		}
		else
		{
			$('#my-navbar').removeClass('menu-bg');
		}
	});


//for scroll-to-top
	$(window).scroll(function()
	{
		if($(this).scrollTop() > 150)
		{
			$('.scrollup').fadeIn();
		}
		else
		{
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){
		$("html, body") .animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	
	