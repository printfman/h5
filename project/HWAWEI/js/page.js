
	class Page{
		constructor(newLi) {
		    this.index = 0;
			this.oLi = newLi;
			this.arr = [];
		}
		getData(){
			let xhr = new XMLHttpRequest();
			let that = this;
			xhr.open("get","list.json",true);
			xhr.onreadystatechange = function(){
				if(xhr.status == 200 && xhr.readyState == 4){
					that.load(xhr.responseText);
				}
			}
			xhr.send();
		}
		
		load(str){
			this.arr=JSON.parse(str);
		}
		Pagination(){
			
			for(let i=this.index*4,j=0; i<this.index*4+4; i++,j++){
				this.oLi[j].firstElementChild.src = this.arr[i].img;
				this.oLi[j].lastElementChild.innerHTML = this.arr[i].price;
			}
		}
		previous(){
			let oBtnPre = document.querySelector(".goods_title_left");
			let that = this;
			
			oBtnPre.onclick = function(){
				that.index--;
				
				if(that.index < 0){
					that.index = that.arr.length/4-1;
				}
				
				that.Pagination();
			}
		}
		next(){
			let oBtnNext= document.querySelector(".goods_title_right");
			let that = this;
			
			oBtnNext.onclick = function(){
				that.index++;
				
				if(that.index > that.arr.length/4){
					that.index = 0;
				}
				
				that.Pagination();
			}
		}
		
	}
	let oShop_page_li = document.getElementsByClassName("shop_page_li");
	let p = new Page(oShop_page_li);
	
	p.getData();
	p.previous();
	p.next();