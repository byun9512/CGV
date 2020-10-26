$(function() {
	/* �� â���� ���� */
	$("a[href^='http']").attr('target','_blank');
	
	/* TOP ��ư */
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
	
	/* �޴� */
	$("#gnb li").mouseover(function() {
		$(this).find("i").stop().animate({width:"160px"});
		$(this).find(".sub").stop().slideDown();
	});
	
	$("#gnb li").mouseout(function() {
		$(this).find("i").stop().animate({width:0});
		$(this).find(".sub").stop().slideUp();
	});
	
	/* ������ ������ ����Ʈ */
	$("#list li").mouseover(function() {
		$(this).next("i").stop(true).animate({opacity:1}, 300);
	});
	$("#list li").mouseout(function() {
		$(this).next("i").stop(true).animate({opacity:0}, 300);
	});
	
	/* ������ ���� �� */
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
	
	/* �����̵� (�ڵ�) */
	$("#slide>li:gt(0)").hide();
	var i = 0;
	var slide;
	var imgCount = $("#slide>li").last().index()+1
	$(window).load(function() {startSlide();});
	
	// �����̵� ���� ���
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
	// �����̵� ���� ���
	function stopSlide() {clearInterval(slide);}
	// �����̵� ����� ���
	$(".btn_prev, .btn_next, #pager_slide li").click(function() {
		startSlide();
	});
	
	// ���� ��ư Ŭ�� ��
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
	// ���� ��ư Ŭ�� ��
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
	// ������ Ŭ�� ��
	$("#pager_slide li").click(function() {
		stopSlide();
		i = $(this).index();
		$("#slide>li").eq(i).siblings().fadeOut();
		$("#slide>li").eq(i).fadeIn(400);
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
	});

	/* �����̵� ��ư ���� �� */
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
	
	/* �������� */
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

	
	/* ��ȭ ���� */	
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
	
	// ������ â���� Ű���� Ű �� ����
	/*
		32�� : �����̽� ��
		33�� : ������ ��		34�� : ������ �ٿ�
		35�� : ����				36�� : Ȩ
		37�� : ��		38�� : ��		39�� : ��		40�� : ��
	*/
	window.addEventListener("keydown", function(e) {
		if([39].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}
	}, false);
});