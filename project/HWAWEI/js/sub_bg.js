	class Banner{
		constructor(Target,Li) {
		    this.target=Target;
			this.li=Li;
			this.index=0;
		}
		//box背景图片
		bgImg(){
			this.target.style.backgroundImage="url(sub_bgimg/"+this.index+".jpg)";
		}
		//li背景颜色
		liBgColor(){
			for(var i=0;i<this.li.length;i++){
				if(this.index==i){
					this.li[i].style.backgroundColor="red";
				}
			else{
				this.li[i].style.backgroundColor="white";
			}
		  }
		}
		//NEXT
// 		rightBtn(){
// 			this.index++;
// 			if(this.index>this.li.length-1){
// 				this.index=0;
// 			}
// 			this.bgImg();
// 			this.liBgColor();
// 		}
// 		//forward
// 		leftBtn(){
// 			this.index--;
// 			if(this.index<0){
// 				this.index=this.li.length-1;
// 			}
// 			this.bgImg();
// 			this.liBgColor();
// 		}
		//按钮绑定事件
// 		btnEvent(){
// 			let oLBtn=document.getElementsByTagName("button")[0];
// 			let oRBtn=document.getElementsByTagName("button")[1];
// 			let that=this;
// 			oLBtn.onclick=function(){
// 				that.leftBtn();
// 			}
// 			oRBtn.onclick=function(){
// 				that.rightBtn();
// 			}
// 		}
		//li绑定事件
		liEvent(){
			let that=this;
			for(let i=0;i<this.li.length;i++){
				this.li[i].onmouseover=function(){
					that.index=i;
					that.liBgColor();
					that.bgImg();
				}
			}
			
		}
		//自动切图
		autoChange(){
			let that=this;
			let time;
			this.time=setInterval(function(){
				
				that.liBgColor();
				that.bgImg();	
				that.index++;
				if(that.index>3){
					that.index=0;
				}
			},1500);
		}
		clearTime(){
			let that=this;
			this.target.onmouseover=function(){			
				clearInterval(that.time);
			}
			this.target.onmouseout=function(){
				that.autoChange();
			}
		}
		
	}
	let osub_bg=document.querySelector(".sub_bg");
	let osub_bg_li=document.getElementsByClassName("sub_bg_li");
	let eg=new Banner(osub_bg,osub_bg_li);
	// eg.btnEvent();
	
	eg.liEvent();
	eg.autoChange();
	// eg.liBgColor();
	eg.clearTime();