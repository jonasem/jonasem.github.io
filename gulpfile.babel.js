import gulp from 'gulp'
import sass from 'gulp-sass'
import concat from 'gulp-concat'
import babel from 'gulp-babel'

const paths = {
	styles: ['node_modules/material-design-lite/material.min.css', 'src/**/*.scss'],
	scripts: ['node_modules/material-design-lite/material.min.js', 'src/**/*.es', 'src/**/*.js'],
}

gulp.task('styles', () => {	
	gulp.src(paths.styles)
		.pipe(sass.sync().on('error', () => {}))
		.pipe(concat('index.css'))
		.pipe(gulp.dest('.'))
});

gulp.task('scripts', () => {	
	gulp.src(paths.scripts)
		.pipe(babel())
		.pipe(concat('index.js'))
		.pipe(gulp.dest('.'))
});


gulp.task('default', ['styles', 'scripts'], () => {});