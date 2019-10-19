//侧栏
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
	});
	//登录
	let oshopcar_login=document.querySelector(".shopcar_login");
	let ologin=document.querySelector(".login");
	let e= new PopPlugin(ologin);
	oshopcar_login.onclick=function(){
		e.moveCenter();
		e.close();
	}

	//购物车车
	
	function getCookie(key){
			let cookiestr=document.cookie;
			let cookieArr=cookiestr.split("; ");
			
			for(let i=0;i<cookieArr.length;i++){
				let item=cookieArr[i].split("=");
				if(item[0]==key){
					return item[1];
				}
			}return "";
		}
	//购物车车
	
	
	let index=getCookie('number');
	if(getCookie('flag')!=""){
		let odiv=$("<div class='main_box'><div class='main_addimg'>77</div><div class='name'>"+getCookie('name')+"</div><div class='btn'><button class='del'>-</button><span class='number'>"+index+"</span><button class='add'>+</button></div><span class='price'>"+getCookie('price')+"</span><div class='clear'></div></div>");
		let osum=$("<p class='sum_box'><span>￥</span><span class='sum_price'>11</span></p>");
		let obuy=$("<div class='buy_box'><button class='buy'>立即付款</button>")
		
		$("main").html(odiv);
		$("main").append(osum);
		$("main").append(obuy);
	}
	$(".add").click(function(){
		index++;
		$(".number").html(index);
		sumprice();
		
	});
	$(".del").click(function(){
		index--;
		if(index<1){
			index=1;
		}
		$(".number").html(index);
		sumprice();
	});
	function sumprice(){
		let sum=$(".number").html()*$(".price").html();
		$(".sum_price").html(sum);
	}
	sumprice();