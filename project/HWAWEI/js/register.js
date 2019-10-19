//验证
	$(".icon").mouseover(function(){
		$(".info_span").css({display:"block"});
	});
	$(".icon").mouseout(function(){
		$(".info_span").css({display:"none"});
	});
	$(".news_confirm").click(function(){
		$(".news_confirm").html("完成验证");
		$(".news_info2").css({backgroundColor:"red"});
		$(".news_info").css({border:"1px solid red"});
	});
//切换
	$(".btn_mail").click(function(){
		$(".btn_mail").css({backgroundColor:"#B40707"});
		$(".btn_phone").css({backgroundColor:"#CCCCCC"});
		$(".main_title").html("注册华为账号(e-mail)");
		$(".news_title").eq(1).html("电子邮箱");
	});
	$(".btn_phone").click(function(){
		$(".btn_phone").css({backgroundColor:"#B40707"});
		$(".btn_mail").css({backgroundColor:"#CCCCCC"});
		$(".main_title").html("注册华为账号(手机号)");
		$(".news_title").eq(1).html("手机号");
	});
//校验

	let ophone_number=document.getElementById("phone_number");
	let ops=document.getElementsByClassName("ps");
	let flagidname=0;
	let flagfirm=0;
	ophone_number.onblur=function(){
		var reg=/^\w{4,10}$/;
		if(!reg.test(ophone_number.value)){
			ops[0].innerHTML="4-10位";			
		}else{
				ops[0].innerHTML="";
				flagidname=1;
			}
		console.log(flagidname);
	}


//弹出框
//div必须设置position
class PopPlugin2{
	constructor(Obj) {
	    this.obj=Obj;
		this.btn=null;
	}
	moveCenter(){
		let omask=document.querySelector(".mask");
		omask.style.display="block";
		this.obj.style.display="block";
		this.obj.style.top=window.innerHeight/2-this.obj.offsetHeight/2+"px";
		this.obj.style.left=window.innerWidth/2-this.obj.offsetWidth/2+"px";
	}
	autoClose(){
		let that=this;
		let omask=document.querySelector(".mask");
		setTimeout(function(){
			that.obj.style.display="none";
			omask.style.display="none";
		},1000);
	}
}


//注册校验

let opwd=document.getElementById("pwd");
let osend=document.querySelector(".send");
let oalert0=document.getElementsByClassName("alert")[0];
let oalert1=document.getElementsByClassName("alert")[1];

osend.onclick=function(){
	let xhr = new XMLHttpRequest();
		xhr.open("get","js/login.php?name="+ophone_number.value+"&pwd="+opwd.value,true);
		xhr.onreadystatechange = function(){
			if(xhr.status == 200 && xhr.readyState == 4){
				fun(xhr.responseText);
			}
		}
		xhr.send();

		
	function fun(str){
		if(str==1&&flagidname==1){
			let eg=new PopPlugin2(oalert0);
			eg.moveCenter();
			eg.autoClose();
		}
		 else if(str==0){
			let eg=new PopPlugin2(oalert1);
			eg.moveCenter();
			eg.autoClose();
		}
	}
}		
	
	
