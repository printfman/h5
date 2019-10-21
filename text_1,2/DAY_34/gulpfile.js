let gulp=require("gulp");
let concat=require("gulp-concat");
// gulp.task("_copy",function(){
// 	gulp.src("index.html").pipe(gulp.dest("D:\\Dest"));
// });
// gulp.task("_copy1",function(){
// 	gulp.src("dir/**/*").pipe(gulp.dest("D:\\Dest"));
// });
// //gulp _copy
// 
// 
// gulp.task("_watch",function(){
// 	gulp.watch("index.html",function(){
// 		gulp.src("dir/**/*").pipe(gulp.dest("D:\\Dest"));
// 	});
// 
// });
// 
// gulp.task("_concat",function(){
// 	gulp.src(["1.js","2.js"]).pipe(concat("tool.js")).pipe(gulp.dest("D:\\Dest"));
// });

gulp.task("_uglify",function(){
	gulp.src("1.js").pipe(uglify()).pipe(gulp.dest("E:\\Dest"));
});