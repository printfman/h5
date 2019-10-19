let http = require("http");//引入了一个模块,定义了一个该模块类型的对象

//创建一个服务器，回调函数表示接收到请求之后做的事情
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	
	//将响应内容返回给客户端
	res.write("呵呵");
	res.write("哈哈");
	
	res.end();
}).listen(8888);