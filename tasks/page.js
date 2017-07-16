var gulp = require('gulp');

gulp.task('page',()=>{
	return gulp.src('src/index.html')
		.pipe(gulp.dest('app'))
})