    $(function(){
        let index =0;
        let t;
         //用jquery方法设置第一张图片显示，其余隐藏
        $('.items').eq(0).show().siblings('.items').hide();
         // 轮播主函数
        function Show(){
            // 让图片淡入淡出
            $('.items').eq(index).stop().fadeIn(2000).siblings('.items').stop().fadeOut(1000);
            //给点点创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式 addClass为追加类名  不影响原来的类名
            $('.list li').eq(index).addClass('active').siblings('.list li').removeClass('active');
        }
        // 自动轮播
        function showTime(){
            index++;
            if(index > $(".items").length-1){
                index = 0;
            } 
            Show();
        }
        t = setInterval(showTime,4000);
        // 下一个与上一个的点击事件
        $("#next").click(function(){
            showTime();
        });
        $("#pre").click(function(){
            index--;
            if(index < 0){
                index = $(".items").length-1;
            } 
            Show();
        });
        // 通过li 改变轮播图
        $(".list li").click(function(){
            //获取当前i的值，并显示
            // index = $(this).index();
            index = $(this).html()-1;
            Show();
        });
        // hover 事件切换（over,out）
        // 鼠标移入移除
        $(".box").hover(function(){
            clearInterval(t);
        },function(){
            t = setInterval(showTime,4000);
        })
        $("#pre").hover(function(){
            $("#next").hide()
            }, function() {
            $("#next").show()
        })
        $('#next').hover(function() {
            $("#pre").hide()
        }, function(){
            $("#pre").show()
        })
    })