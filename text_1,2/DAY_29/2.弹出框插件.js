class PopPlugin{
	constructor(Obj) {
	    this.obj=Obj;
		this.btn=null;
	}
	moveCenter(){
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
		this.obj.appendChild(this.btn);
		let that=this;
		this.btn.onclick=function(){
			that.obj.style.display="none";
		}
		}
	close(){
		let that=this;
		this.btn.onclick=function(){
			that.obj.style.display="none";
		}
	}
}
