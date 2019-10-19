	// console.log("热爱生活的第n天");
	//下拉菜单
	let oLi=document.querySelector(".more");
	let oHide=document.querySelector(".hide");
	let oa=document.querySelector(".more_a");
	oLi.onmouseover=function(){
		oHide.style.display="block";
		oa.style.color="#CE0A2C";
	}
	oLi.onmouseout=function(){
		oHide.style.display="none";
		oa.style.color="";
	}
	let oLi_b=document.querySelector(".sever_li");
	let oHide_b=document.querySelector(".server_hide");
	let osever=document.querySelector(".server_a");
	oLi_b.onmouseover=function(){
		oHide_b.style.display="block";
		osever.style.color="#CE0A2C";
	}
	oLi_b.onmouseout=function(){
		oHide_b.style.display="none";
		osever.style.color="";
	}
	let oCar=document.querySelector(".car");
	let oShow_car=document.querySelector(".show_car");
	let oCar_a=document.querySelector(".car_a");
	oCar.onmouseover=function(){
		oShow_car.style.display="block";
		oCar_a.style.color="#CE0A2C";
		this.style.backgroundColor="white";
	}
	oCar.onmouseout=function(){
		oShow_car.style.display="none";
		oCar_a.style.color="";
		this.style.backgroundColor="";
	}
	let oul_phone_li=document.querySelector(".ul_phone_li");
	let ul_phone=document.querySelector(".ul_phone");
	let ul_phone_a=document.querySelector(".ul_phone_a");
	oul_phone_li.onmouseover=function(){
		ul_phone.style.display="block";
		ul_phone_a.style.color="#CE0A2C";
		this.style.backgroundColor="white";
	}
	oul_phone_li.onmouseout=function(){
		ul_phone.style.display="none";
		ul_phone_a.style.color="";
		this.style.backgroundColor="";
	}
	
	//菜单栏
	$(".title").eq(0).mouseover(function(){
		$(".side_show").eq(0).css({display:"block"});
	});
	$(".title").eq(1).mouseover(function(){
		$(".side_show_pc").eq(0).css({display:"block",width:"300px"});
	});
	$(".title").eq(2).mouseover(function(){
		$(".side_show_Ai").eq(0).css({display:"block",width:"300px"});
	});
	$(".title").eq(3).mouseover(function(){
		$(".side_show_screen").eq(0).css({display:"block",width:"900px"});
	});
	$(".title").eq(4).mouseover(function(){
		$(".side_show_pc").eq(0).css({display:"block",width:"300px"});
	});
	$(".title").eq(5).mouseover(function(){
		$(".side_show").eq(0).css({display:"block"});
	});
	$(".side").mouseout(function(){
		$(".side_show").eq(0).css({display:"none"});
		$(".side_show_pc").eq(0).css({display:"none"});
		$(".side_show_Ai").eq(0).css({display:"none"});
		$(".side_show_screen").eq(0).css({display:"none"});
	});
	//侧边下单
	$("#aside_a").mouseover(function(){
		$("#aside_pa").css({display:"block"});
	})
	$("#aside_a").mouseout(function(){
		$("#aside_pa").css({display:"none"});
	})
	$("#aside_b").mouseover(function(){
		$("#aside_pb").css({display:"block"});
	})
	$("#aside_b").mouseout(function(){
		$("#aside_pb").css({display:"none"});
	})
	$("#aside_c").mouseover(function(){
		$("#aside_pc").css({display:"block"});
	})
	$("#aside_c").mouseout(function(){
		$("#aside_pc").css({display:"none"});
	})
	//侧边上单
	 window.onscroll = function(){
			_top = document.body.scrollTop || document.documentElement.scrollTop;
			// console.log(_top);
			if(_top>=500){
				$(".aside_goods").eq(0).css({display:"block"});
				$(".aside_goods").eq(0).animate({
					right:10
				},1000);
				if(_top>=800&&_top<=1100){
					$(".aside_goods_li").css({borderRight:"none"});
					$(".aside_goods_li").eq(0).css({borderRight:"2px solid red"});
				}
				if(_top>1100&&_top<=1500){
					$(".aside_goods_li").css({borderRight:"none"});
					$(".aside_goods_li").eq(1).css({borderRight:"2px solid red"});
				}
				if(_top>1500&&_top<=3100){
					$(".aside_goods_li").css({borderRight:"none"});
					$(".aside_goods_li").eq(2).css({borderRight:"2px solid red"});
				}
				if(_top>3100&&_top<=3700){
					$(".aside_goods_li").css({borderRight:"none"});
					$(".aside_goods_li").eq(3).css({borderRight:"2px solid red"});
				}
				if(_top>3700&&_top<=4400){
					$(".aside_goods_li").css({borderRight:"none"});
					$(".aside_goods_li").eq(4).css({borderRight:"2px solid red"});
				}
				if(_top>4400&&_top<=5000){
					$(".aside_goods_li").css({borderRight:"none"});
					$(".aside_goods_li").eq(5).css({borderRight:"2px solid red"});
				}
				if(_top>5000&&_top<=5600){
					$(".aside_goods_li").css({borderRight:"none"});
					$(".aside_goods_li").eq(6).css({borderRight:"2px solid red"});
				}
				if(_top>5600&&_top<=6400){
					$(".aside_goods_li").css({borderRight:"none"});
					$(".aside_goods_li").eq(7).css({borderRight:"2px solid red"});
				}
				else if(_top>6400){
					$(".aside_goods").eq(0).css({display:"none"});
				}
			}
			else{
					$(".aside_goods").eq(0).css({display:"none"});
				}
		}

//弹出框
	let ologin_btn=document.getElementsByClassName("login_btn");
	let ologin=document.querySelector(".login");

	let e= new PopPlugin(ologin);
	ologin_btn[0].onclick=function(){
		
		e.moveCenter();
		e.close();
		
	}
	ologin_btn[1].onclick=function(){
		e.moveCenter();
		e.close();
	}
//cookie
	// $.cookie("tody","bad");
	
//定位
// $(function(){        
// 	var w=window.screen.width;        
// 	var zoom=w/1920;
// 	$("#container").css({
// 			"zoom",zoom,
// 			"-moz-transform":"scale("+zoom+")",
// 	　　　　　　"-moz-transform-origin":"top left";
// 		  });
//  });

//扫码登录
	let ologin_ewm=document.querySelector(".login_ewm");
	let oid=document.querySelector(".id");
	let oid2=document.querySelector(".id2");
	let ologin_number=document.querySelector(".login_number");
	let ologin_center=document.querySelector(".login_center");
	ologin_ewm.onclick=function(){
		ologin_center.innerHTML=oid2.innerHTML;
		ologin_ewm.style.color="#B40707";
		ologin_number.style.color="black";
	}
	ologin_number.onclick=function(){
		ologin_center.innerHTML=oid.innerHTML;
		ologin_number.style.color="#B40707";
		ologin_ewm.style.color="black";
	}