$(function () {
	
//首页头部导航栏        首页头部导航栏        首页头部导航栏        首页头部导航栏        首页头部导航栏        
	$(".justifyDiv").click(function () {
		$(".slideHMenuBox").css({"top":"0","transition":"all 0.3s linear","left":"0px"});				;
	})
	
	$(".slideHMenuClose").click(function () {
		var bodyLeft = parseInt($("body").css("width"));		
		$(".slideHMenuBox").css({"transition":"all 0s linear","left":bodyLeft});
		$(".slideHMenuUlSecond1").css("left","200%");
		$(".slideHMenuUlSecond2").css("left","200%");
	})
	
	$("#doc").click(function (event) {
		event.preventDefault();	
		$(".slideHMenuUlSecond1").css({"top":"0","left":"0px"});
	})	
	
	$("#goBack1").click(function (event) {
		event.preventDefault();	
		$(".slideHMenuUlSecond1").css("left","200%");
	})
	
	$("#abo").click(function (event) {
		event.preventDefault();					
		$(".slideHMenuUlSecond2").css({"top":"0","left":"0px"});
	})
	
	$("#goBack2").click(function (event) {
		event.preventDefault();	
		$(".slideHMenuUlSecond2").css("left","200%");
	})					
	
//  免费海量模板随您挑选    免费海量模板随您挑选    免费海量模板随您挑选
	var leftUlCount = 0;	
	function playImg () {
		var lefts = parseInt($(".tempUl").css("left"));
		var widthImg = parseInt($(".tempUl>li").css("width"));						
		var end = widthImg*5;
			leftUlCount=(leftUlCount+1)%6;
			$(".tempUl").css("left",-leftUlCount*widthImg);
	}
	
	var inter = setInterval(playImg,2500);
	
	function startPlay () {
		inter = setInterval(playImg,2500);
	}
	
	$("#right").click(function () {
		clearInterval(inter);
		var lefts = parseInt($(".tempUl").css("left"));
		var widthImg = parseInt($(".tempUl>li").css("width"));
		var end = widthImg*5;
		leftUlCount=(leftUlCount+1)%6;
		$(".tempUl").css("left",-leftUlCount*widthImg);
		startPlay();
	});

	$("#left").click(function () {
		clearInterval(inter);
		leftUlCount = (--leftUlCount)<0 ? 5:leftUlCount;
		var lefts = parseInt($(".tempUl").css("left"));
		var widthImg = parseInt($(".tempUl>li").css("width"));
		var end = widthImg*5;
		if (lefts==0) {
			lefts = (-end);
			$(".tempUl").css("left",lefts);
		} else{							
			$(".tempUl").css("left",lefts+widthImg);
		}
		startPlay();
	});
	
//	客户反馈      客户反馈      客户反馈       客户反馈       客户反馈       客户反馈       客户反馈
	var fb = 0;
	var divSize = $(".slideDivs>div").length;
	var $divs = $(".slideDivs>div");	
	//初始化
	$divs.eq((fb-1)<0?(divSize-1):(fb-1)).css({"transition": "all 0s linear","left":"-100%"});
	$divs.eq(fb).css({"transition": "all 0s linear","left":"0px"});
	$divs.eq(fb+1).css({"transition": "all 0s linear","left":"100%"});
	
	function fdPlay(){
		$divs.eq((fb-1)<0?(divSize-1):(fb-1)).css({"transition": "all 0s linear","left":"100%"});
		$divs.eq(fb).css({"transition": "all 0.4s linear","left":"-100%"});
		$divs.eq((fb+1)%divSize).css({"transition": "all 0.4s linear","left":"0px"});
		fb = (fb+1)%divSize;
		$(".fbindicators>li").removeClass("fbActive").eq(fb).addClass("fbActive");
	}			
	var fbinter = setInterval(fdPlay,3000);			
	function startfbPlay(){
		fbinter = setInterval(fdPlay,3000);								
	}
	$(".fbright").click(function () {
		clearInterval(fbinter);
		$divs.eq((fb-1)<0?(divSize-1):(fb-1)).css({"transition": "all 0s linear","left":"100%"});
		$divs.eq(fb).css({"transition": "all 0.4s linear","left":"-100%"});
		$divs.eq((fb+1)%divSize).css({"transition": "all 0.4s linear","left":"0px"});
		fb = (fb+1)%divSize;
		$(".fbindicators>li").removeClass("fbActive").eq(fb).addClass("fbActive");
		startfbPlay();
	});

	$(".fbleft").click(function () {
		clearInterval(fbinter);
		$divs.eq((fb-1)<0?(divSize-1):(fb-1)).css({"transition": "all 0.4s linear","left":"0px"});
		$divs.eq(fb).css({"transition": "all 0.4s linear","left":"100%"});
		$divs.eq((fb+1)%divSize).css({"transition": "all 0s linear","left":"-100%"});				
		$(".fbindicators>li").removeClass("fbActive").eq((fb-1)<0?(divSize-1):(fb-1)).addClass("fbActive");
		fb = (fb-1)<0?(divSize-1):(fb-1);
		startfbPlay();
	});
	
	$(".fbindicators>li").click(function () {
		clearInterval(fbinter);
		var chosedIndex = $(this).index();
		$divs.eq(fb).css({"transition": "all 0s linear","left":"-100%"});
		$divs.eq(chosedIndex).css({"transition": "all 0s linear","left":"0px"});
		$divs.eq((chosedIndex+1)%divSize).css({"transition": "all 0s linear","left":"100%"});
		fb = chosedIndex;
		$(".fbindicators>li").removeClass("fbActive").eq(fb).addClass("fbActive");
		startfbPlay();
	})
		
//	做一个响应式网站,让世界更好的了解您	做一个响应式网站,让世界更好的了解您
	var i = 0;
	setTimeout(function () {
		setInterval(function () {
//			var texts = ["做","一","个","响","应","式","网","站"];		
			var texts = "做一个响应式网站";
			if(i<texts.length) {
				$(".coverSpan2").before(texts[i++]);			
			}
		},250)},800);
	
	var j = 0;	
	setTimeout(function () {
		setInterval(function () {
		var texts = ["<br/>","让","世","界","更","好","的","了","解","您"];
		if(j<texts.length) {
			$(".coverSpan2").before(texts[j++]);
		}
	},250)},4800);
	
//	文档的子菜单的js   文档的子菜单的js  文档的子菜单的js	
	$(".doc").hover(function () {
		$(".document").css({"opacity":"1","visibility":"visible"});
		return false;
	},function () {
		$(".document").css({"visibility":"hidden","opacity":0});
		return false;
	});	
	$(".document").hover(function () {
		$(this).css({"opacity":"1","visibility":"visible"});
	},function () {
		$(this).css({"visibility":"hidden","opacity":0});
	});
	
//	关于的子菜单的js   关于的子菜单的js  关于的子菜单的js		
	$(".abo").hover(function () {		
		$(".about").css({"opacity":"1","visibility":"visible"});	
	},function () {
		$(".about").css({"visibility":"hidden","opacity":0});
	});	
	$(".about").hover(function () {
		$(this).css({"opacity":"1","visibility":"visible"});
	},function () {
		$(this).css({"visibility":"hidden","opacity":0});
	});
	
//	右侧悬浮菜单   右侧悬浮菜单   右侧悬浮菜单   右侧悬浮菜单   右侧悬浮菜单
	$(".rightMenu>li.last").hover(function () {
		$(".wxDiv").css({"opacity":"0.8","right":"83px","visibility":"visible"});
	},function () {
		$(".wxDiv").css({"opacity":"0","right":"73px","visibility":"hidden"});
	});

//案例页面的左侧按钮	案例页面的左侧按钮	案例页面的左侧按钮	案例页面的左侧按钮	
	$(".caseLeftNav>ul>li>a").click(function () {
		var dis = $(this).parent().find(".secondUl").css("display");
		console.log(this);console.log(dis);
		if (dis === 'none') {
			$(".caseLeftNav>ul>li").find(".secondUl").css("display","none");
			$(this).parent().find(".secondUl").css("display","block");
		} else{
			$(this).parent().find(".secondUl").css("display","none");
		}		
	});

//案例页面“按分类浏览”按钮	案例页面“按分类浏览”按钮	案例页面“按分类浏览”按钮	
	$(".menuDown").click(function () {
		var dis = $(".subMenu").css("display");
		console.log(dis);
		if (dis == "none") {
			$(".subMenu").css("display","block");
		} else{
			$(".subMenu").css("display","none");
		}
		
	})
	
//防右侧划出的菜单在浏览器变大时出现
	window.onresize=function () {
		var bodyLeft = parseInt($("body").css("width"));
		$(".slideHMenuBox").css({"transition":"all 0s","left":bodyLeft});
		$(".slideHMenuUlSecond1").css("left","200%");
		$(".slideHMenuUlSecond2").css("left","200%");
		
		//下滑出现的头部菜单（浏览器宽度重置场景）
		var elem = $(".navBox2")[0].offsetTop;console.log("elem:"+elem);
		var scrBar = $("body")[0].scrollTop;
		if (bodyLeft>769 && elem-scrBar<-70) {
			if ($(".navBox2").css("display")=="none") {
				$(".navBox2").slideDown();
			}	
		}else{
			if ($(".navBox2").css("display")=="block") {
				$(".navBox2").css("display","none");
			}
		}
		
	};	
})
//下滑出现的头部菜单		下滑出现的头部菜单	下滑出现的头部菜单	下滑出现的头部菜单（浏览器滚动场景）	
window.onscroll = function () {
	var elem = $(".navBox2")[0].offsetTop;console.log("elem:"+elem);
	var scrBar = $("body")[0].scrollTop;
	var bwidth = parseInt($("body").css("width"));
	var bodyLeft = parseInt($("body").css("width"));
	if (elem-scrBar<-70 && bodyLeft>769) {
		if ($(".navBox2").css("display")=="none") {
			$(".navBox2").slideDown();
		}												
	}else{
		if ($(".navBox2").css("display")=="block") {
			$(".navBox2").css("display","none");
		}						
	}											
	
};