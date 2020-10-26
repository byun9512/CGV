$(function() {
	/* 새 창으로 열기 */
	$("a[href^='http']").attr('target','_blank');
	
	/* TOP 버튼 */
	$(window).on("scroll", function() {
		var scrollNum = parseInt($(window).scrollTop());
		if (scrollNum > 100) {
			$("#top_button").stop(true).fadeIn();
		} else if (scrollNum == 0) {
			$("#top_button").stop(true).fadeOut();
		}
	});
	
	$("#top_button").click(function() {
		$("html, body").stop(true).animate({scrollTop:0}, 1000);
	});
	
	/* 메뉴 */
	$("#gnb li").mouseover(function() {
		$(this).find("i").stop().animate({width:"160px"});
		$(this).find(".sub").stop().slideDown();
	});
	
	$("#gnb li").mouseout(function() {
		$(this).find("i").stop().animate({width:0});
		$(this).find(".sub").stop().slideUp();
	});
	
	/* 오른쪽 아이콘 리스트 */
	$("#list li").mouseover(function() {
		$(this).next("i").stop(true).animate({opacity:1}, 300);
	});
	$("#list li").mouseout(function() {
		$(this).next("i").stop(true).animate({opacity:0}, 300);
	});
	
	/* 오른쪽 숨김 바 */
	$(".etc_down").click(function() {
		$("#etc").stop(true).animate({top:0}, 700);
		$(".etc_down").hide();
		$(".etc_up").show();
	});
	$(".etc_up").click(function() {
		$("#etc").stop(true).animate({top:-570}, 700);
		$(".etc_up").hide();
		$(".etc_down").show();
	});
	
	/* 슬라이드 (자동) */
	$("#slide>li:gt(0)").hide();
	var i = 0;
	var slide;
	var imgCount = $("#slide>li").last().index()+1
	$(window).load(function() {startSlide();});
	
	// 슬라이드 시작 기능
	function startSlide() {
		slide = setInterval(function(){
			var next = (i+1) % 7;
			$("#slide>li").eq(i).fadeOut();
			$("#slide>li").eq(next).fadeIn(400);
			$("#pager_slide li").eq(next).addClass("on");
			$("#pager_slide li").eq(next).siblings().removeClass("on");
			i = next;
		}, 6000);
	}
	// 슬라이드 멈춤 기능
	function stopSlide() {clearInterval(slide);}
	// 슬라이드 재시작 기능
	$(".btn_prev, .btn_next, #pager_slide li").click(function() {
		startSlide();
	});
	
	// 다음 버튼 클릭 시
	$(".btn_next").click(function() {
		stopSlide();
		i++;
		if(i == imgCount) {
			i = 1;
		}
		$("#slide>li").eq(i).siblings().fadeOut();
		$("#slide>li").eq(i).fadeIn(400);
		$("#pager_slide li").eq(i).addClass("on");
		$("#pager_slide li").eq(i).siblings().removeClass("on");
		if (i == imgCount-1) {
			$("#pager_slide li").eq(0).addClass("on");
		}
	});
	// 이전 버튼 클릭 시
	$(".btn_prev").click(function() {
		stopSlide();
		i--;
		if(i == -1) {
			i = 7;
		}
		$("#slide>li").eq(i).siblings().fadeOut();
		$("#slide>li").eq(i).fadeIn(400);
		$("#pager_slide li").eq(i).addClass("on");
		$("#pager_slide li").eq(i).siblings().removeClass("on");
	});
	// 페이저 클릭 시
	$("#pager_slide li").click(function() {
		stopSlide();
		i = $(this).index();
		$("#slide>li").eq(i).siblings().fadeOut();
		$("#slide>li").eq(i).fadeIn(400);
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
	});

	/* 슬라이드 버튼 오버 시 */
	$(".btn_prev").on({
		"mouseover" : function() {
			$(this).stop(true).animate({opacity:0}, 300);
			$(this).prev().stop(true).animate({opacity:1}, 300);
		},
		"mouseout" : function() {
			$(this).stop(true).animate({opacity:1}, 300);
			$(this).prev().stop(true).animate({opacity:0}, 300);
		}
	});
	$(".btn_next").on({
		"mouseover" : function() {
			$(this).stop(true).animate({opacity:0}, 300);
			$(this).prev().stop(true).animate({opacity:1}, 300);
		},
		"mouseout" : function() {
			$(this).stop(true).animate({opacity:1}, 300);
			$(this).prev().stop(true).animate({opacity:0}, 300);
		}
	});
	
	/* 공지사항 */
	$("#notice ul li").each(function(notice) {
		$(this).css("top",notice*40);
	});
	
	setInterval(function() {
		$("#notice ul li").each(function() {
			var nowTop = parseInt($(this).css("top"));
			var moveTop = nowTop - 40;
			$(this).animate({top:moveTop}, function() {
				if(moveTop == -40) {
					$(this).css("top",80);
				}
			});
		});
	}, 3000);

	
	/* 영화 선택 */	
	$(".movSlide li").each(function(mov){
		$(this).css("left", mov*220);
	});
	
	var m = 0;
	var movCount = $(".movSlide li").last().index()+1
	
	$(".btn_left").click(function(){
		m--;
		if(m == -1) {
			m = 4;
		}
		console.log(m);
		$(".movSlide li").each(function() {
			var nowRight = parseInt($(this).css("left"));
			var moveRight = nowRight + 220;
			$(this).stop(true).animate({left:moveRight}, function() {
				if(moveRight == 1100) {
					$(this).css("left", 0);
				}
			});
		});
		$("#exp ul").eq(m).stop(true).fadeIn(1200);
		$("#exp ul").eq(m).siblings().stop(true).fadeOut();
	});
	
	$(".btn_right").click(function(){
		m++;
		if(m == movCount) {
			m = 0;
		}
		console.log(m);
		$(".movSlide li").each(function() {
			var nowLeft = parseInt($(this).css("left"));
			var moveLeft = nowLeft - 220;
			$(this).stop(true).animate({left:moveLeft}, function() {
				if(moveLeft == -220) {
					$(this).css("left", 880);
				}
			});
		});
		$("#exp ul").eq(m).stop(true).fadeIn(1200);
		$("#exp ul").eq(m).siblings().stop(true).fadeOut();
	});
	
	// 윈도우 창에서 키보드 키 값 막기
	/*
		32번 : 스페이스 바
		33번 : 페이지 업		34번 : 페이지 다운
		35번 : 엔드				36번 : 홈
		37번 : ←		38번 : ↑		39번 : →		40번 : ↓
	*/
	window.addEventListener("keydown", function(e) {
		if([39].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}
	}, false);
});