//账号验证
let ologin_id=document.querySelector(".login_id");
let ologin_ps=document.querySelector(".login_ps");
let ologin_pwd=document.querySelector(".login_pwd");

ologin_id.onblur=function(){
	var reg=/^\d{4,18}$/;
	if(!reg.test(ologin_id.value)){
		ologin_ps.innerHTML="！账号不低于4位数";
	}else{
			ologin_ps.innerHTML="";
		}
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
//登录校验
	let oalert1=document.getElementsByClassName("alert")[1];
	let ologin2=document.querySelector(".login");
let ologin_center_send=document.querySelector(".login_center_send");
	ologin_center_send.onclick=function(){
		ologin2.style.display="none";
		let eg=new PopPlugin2(oalert1);
		eg.moveCenter();
		eg.autoClose();
	}
