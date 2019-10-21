let http = require("http");

let s=http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	// console.log(req.url);
	if(req.url=='/login'){
		console.log("aa");
	}else if(req.url=='/admin'){
		console.log("bb");
	}
		
	res.end();

});
s.listen(8855);