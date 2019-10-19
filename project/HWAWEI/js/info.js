//菜单下滑切换
	$(".top_ul").mouseover(function(){
		$(".top_show").stop().slideDown();
	});
	let oShow=document.getElementsByClassName("show");
	let oTop_show=document.querySelector(".top_show");
	let oTop_show1=document.querySelector(".top_show1");
	let oTop_show2=document.querySelector(".top_show2");
	let oTop_show3=document.querySelector(".top_show3");
	let oTop_show4=document.querySelector(".top_show4");
	let oTop_show5=document.querySelector(".top_show5");
	let oTop=document.querySelector(".top");
	oShow[0].onmouseover=function(){
		oTop_show.innerHTML=oTop_show1.innerHTML;
	}
	oShow[1].onmouseover=function(){
		oTop_show.innerHTML=oTop_show2.innerHTML;
	}
	oShow[2].onmouseover=function(){
		oTop_show.innerHTML=oTop_show3.innerHTML;
	}
	oShow[3].onmouseover=function(){
		oTop_show.innerHTML=oTop_show4.innerHTML;
	}
	oShow[4].onmouseover=function(){
		oTop_show.innerHTML=oTop_show5.innerHTML;
	}
	$(".top_ul").mouseout(function(){
		$(".top_show").stop().slideUp();
	});
//放大镜
class Loupe{
		constructor(newSmallBox,newBigBox,newMask) {
		    this.smallBox=newSmallBox;
			this.bigBox=newBigBox;
			this.mask=newMask;
		}
		onmouseover(){	
			let that=this;
			this.smallBox.onmouseover=function(){
				that.mask.style.display="block";
				that.bigBox.style.display="block";
			}
		}
		onmouseout(){	
			let that=this;
			this.smallBox.onmouseout=function(){
				that.mask.style.display="none";
				that.bigBox.style.display="none";
			}
		}
		onmousemove(){
			let that=this;
			oSmallBox.onmousemove=function(evt){
				let e=evt||event;
				let left = e.pageX - this.offsetLeft - that.mask.offsetWidth/2;
				let top = e.pageY - this.offsetTop - that.mask.offsetHeight/2;
				let maxLeft=this.offsetWidth-that.mask.offsetWidth;
				let maxHeight=this.offsetHeight-that.mask.offsetHeight;
				if(left<=0){
					left=0+"px";
				}
				if(left>maxLeft){
					left=maxLeft;
				}
				if(top<0){
					top=0;
				}
				if(top>maxHeight)
				{
					top=maxHeight;
				}
				that.mask.style.left=left+"px";
				that.mask.style.top=top+"px";
				//小盒子的遮罩比小盒子等于大盒子比大盒子背景图片
				let x = that.bigBox.offsetWidth*left/that.mask.offsetWidth;
				let y = that.bigBox.offsetHeight*top/that.mask.offsetHeight;
				
				that.bigBox.style.backgroundPositionX = -x + "px";
				that.bigBox.style.backgroundPositionY = -y + "px";
			}
		}
	}
	let oMask=document.querySelector("#mask");
	let oSmallBox=document.querySelector("#small-box");
	let oBigBox=document.querySelector("#big-box");
	let eg=new Loupe(oSmallBox,oBigBox,oMask);
	eg.onmouseover();
	eg.onmousemove();
	eg.onmouseout();
//放大假换图

	$(".info_page li").eq(0).mouseover(function(){
		$("#small-box").css({backgroundImage:"url(img/goods2.png)"});
		$("#big-box").css({backgroundImage:"url(img/goods2.png)"});
		$(".info_img").css({border:"1px solid gainsboro"});
		$(this).css({border:"1px solid #CF0A2C"});
	});
	$(".info_page li").eq(1).mouseover(function(){
		$("#small-box").css({backgroundImage:"url(goodsinfo_img/info1.png)"});
		$("#big-box").css({backgroundImage:"url(goodsinfo_img/info1.png)"});
		$(".info_img").css({border:"1px solid gainsboro"});
		$(this).css({border:"1px solid #CF0A2C"});
	});
	$(".info_page li").eq(2).mouseover(function(){
		$("#small-box").css({backgroundImage:"url(goodsinfo_img/info2.png)"});
		$("#big-box").css({backgroundImage:"url(goodsinfo_img/info2.png)"});
		$(".info_img").css({border:"1px solid gainsboro"});
		$(this).css({border:"1px solid #CF0A2C"});
	});
	$(".info_page li").eq(3).mouseover(function(){
		$("#small-box").css({backgroundImage:"url(goodsinfo_img/info3.png)"});
		$("#big-box").css({backgroundImage:"url(goodsinfo_img/info3.png)"});
		$(".info_img").css({border:"1px solid gainsboro"});
		$(this).css({border:"1px solid #CF0A2C"});
	});
	$(".info_page li").eq(4).mouseover(function(){
		$("#small-box").css({backgroundImage:"url(goodsinfo_img/info4.png)"});
		$("#big-box").css({backgroundImage:"url(goodsinfo_img/info4.png)"});
		$(".info_img").css({border:"1px solid gainsboro"});
		$(this).css({border:"1px solid #CF0A2C"});
	});
	//分页
	$(".info_page_left").click({
		// $(".info_page_ul").css({left:"10px"});
	});

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

//info弹出框
let oshopping=document.querySelector(".shopping");
let otarget=document.querySelector(".target");
let o= new PopPlugin(otarget);
oshopping.onclick=function(){
	o.moveCenter();
	o.close();
	o.autoClose();
}	
//加入购物车车
	let name=$(".info_right_title").html();
	let oprice=$(".price").eq(1).html();
	let oshop_car=document.querySelector(".shop_car");
	let onumber=$(".goods_number").html();
	let number=1;
	$(".add").click(function(){
		number--;
		if(number<1){
			number=1;
		}
		$(".goods_number").html(number);
		onumber=$(".goods_number").html();
	});
	$(".del").click(function(){
		number++;
		$(".goods_number").html(number);
		onumber=$(".goods_number").html();
	});
	
	oshop_car.onclick=function(){
		document.cookie="name="+name;
		document.cookie="price="+oprice;
		document.cookie="number="+onumber;
		// console.log($(".first_img").attr('src'));
		document.cookie="flag=111";
	};

//选择手机参数
let ophone_color=document.getElementsByClassName("phone_color");
let osmall_box=document.getElementById("small-box");
let ophone_color2=document.getElementsByClassName("phone_color2");
let ophone_color3=document.getElementsByClassName("phone_color3");
for(let i=0;i<ophone_color.length;i++){
	ophone_color[i].onclick=function(){
		for(let i=0;i<ophone_color.length;i++){
			ophone_color[i].style.border="";
		}
		let j=i+1;
		this.style.border="1px solid red";
		osmall_box.style.backgroundImage="url(goodsinfo_img/info"+j+".png)";
	}
	
}

for(let i=0;i<ophone_color2.length;i++){
	ophone_color2[i].onclick=function(){
		for(let i=0;i<ophone_color2.length;i++){
			ophone_color2[i].style.border="";
		}
		let j=i+1;
		this.style.border="1px solid red";
	}
	
}

for(let i=0;i<ophone_color3.length;i++){
	ophone_color3[i].onclick=function(){
		for(let i=0;i<ophone_color3.length;i++){
			ophone_color3[i].style.border="";
		}
		let j=i+1;
		this.style.border="1px solid red";
	}
	
}