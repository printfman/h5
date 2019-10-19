class Banner{
		constructor(Target,Li,LBtn,RBtn) {
		    this.target=Target;
			this.li=Li;
			this.lBtn=LBtn;
			this.rBtn=RBtn;
			this.index=0;
		}
		//box背景图片
		bgImg(){
			this.target.style.backgroundImage="url(photo/"+this.index+".jpg)";
		}
		//li背景颜色
		liBgColor(){
			for(let i=0;i<this.li.length;i++){
				if(this.index==i)
				this.li[i].style.backgroundColor="#CF0F32";
			else{
				this.li[i].style.backgroundColor="white";
			}
		  }
		}
		//NEXT
		rightBtn(){
			this.index++;
			if(this.index>this.li.length-1){
				this.index=0;
			}
			this.bgImg();
			this.liBgColor();
		}
		//forward
		leftBtn(){
			this.index--;
			if(this.index<0){
				this.index=this.li.length-1;
			}
			this.bgImg();
			this.liBgColor();
		}
		//按钮绑定事件
		btnEvent(){
			let that=this;
			this.lBtn.onclick=function(){
				that.leftBtn();
			}
			this.rBtn.onclick=function(){
				that.rightBtn();
			}
		}
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
				that.index++;
				that.liBgColor();
				that.bgImg();				
				if(that.index>that.li.length-2){
					that.index=-1;
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
// 
// 	eg.btnEvent();
// 	eg.liEvent();
// 	eg.autoChange();
// 	eg.clearTime();