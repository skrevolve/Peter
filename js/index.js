$(document).ready(function(){

	//about 페이지 이동 이벤트
    	$('#GoToabout1').click(function(){
        var offset = $('#about').offset(); //선택한 태그의 위치를 반환
        $('html').animate({scrollTop : offset.top}, 500);
	});
	
	//Blog 페이지 이동 이벤트
	$('#GoToBlog').click(function(){
	href="https://github.com/skrevolve"
	}
	//about 페이지 이동 이벤트(하단 화살표)
	$('#GoToabout2').click(function(){
        var offset = $('#about').offset();
        $('html').animate({scrollTop : offset.top}, 500);
	});
	
	//skills 페이지 이동 이벤트
	$('#GoToskills').click(function(){
        var offset = $('#skills').offset();
        $('html').animate({scrollTop : offset.top}, 500);
	});
	
	//projects 페이지 이동 이벤트
	$('#GoToprojects').click(function(){
        var offset = $('#projects').offset();
        $('html').animate({scrollTop : offset.top}, 500);
	});
	
	//Parallax 옵션 설정
	$('.parallax-window').parallax({imageSrc: 'img/test.jpg',iosFix: false,androidFix: false});

	// $('.parallax-window').parallax({imageSrc: 'img/test.jpg'});
	// jQuery(window).trigger('resize').trigger('scroll');
});
//# sourceURL=index.js
