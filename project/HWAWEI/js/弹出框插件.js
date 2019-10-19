//div必须设置position
class PopPlugin{
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
		this.creatBtn();
	}
	creatBtn(){
		this.btn=document.createElement("button");
		this.btn.innerHTML="x";
		this.btn.style.position="absolute";
		this.btn.style.right=0+"px";
		this.btn.style.top=0+"px";
		this.btn.style.border="none";
		this.btn.style.backgroundColor="#A51B1B";
		this.btn.style.color="white";
		this.btn.style.fontSize="20px";
		this.btn.style.outline="none";
		this.btn.style.width="50px";
		this.btn.style.height="30px";
		this.obj.appendChild(this.btn);
		let that=this;
		this.btn.onclick=function(){
				that.obj.style.display="none";
			}
		}
	close(){
		let omask=document.querySelector(".mask");
		let that=this;
		this.btn.onclick=function(){
			that.obj.style.display="none";
			omask.style.display="none";
		}
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

