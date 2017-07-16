var gulp = require('gulp');

gulp.task('watch',()=>{
	gulp.watch('src/*.html',['page']);
	gulp.watch('src/css/**/*.css',['css'])
})