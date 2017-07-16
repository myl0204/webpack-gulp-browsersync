var gulp = require('gulp');

gulp.task('css',()=>{
 	return gulp.src('src/index.html')
		gulp.dest('./app')
})
