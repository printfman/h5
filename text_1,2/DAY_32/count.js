$.extend({
	oprate:function(a,o,b){
		switch(o){
			case "+":
				return a+b;
				break;
			case "-":
				return a-b;
				break;
			case "*":
				return a*b;
				break;
			case "/":
				return a/b;
				break;
		}
	}
})