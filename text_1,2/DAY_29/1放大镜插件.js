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