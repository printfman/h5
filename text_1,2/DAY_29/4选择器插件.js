class Select{
	static _select(str){
		if(str.charAt(0) == "#"){
			return document.getElementById(str.slice(1,str.length));
		}
		if(str.charAt(0) == "."){
			return document.getElementsByClassName(str.slice(1,str.length));
		}
		else{
			return document.getElementsByTagName(str);
		}
		
	}
	
}