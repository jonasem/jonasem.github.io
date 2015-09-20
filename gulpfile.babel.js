import gulp from 'gulp'
import sass from 'gulp-sass'
import concat from 'gulp-concat'
import babel from 'gulp-babel'
import react from 'gulp-react'

const paths = {
	styles: ['src/**/*.scss'],
	scripts: [ 
		'src/**/*.es', 
		'src/**/*.js'],
	templates: 'src/**/*.jsx'
}

gulp.task('styles', () => {	
	gulp.src(paths.styles)
		.pipe(sass.sync().on('error', () => {}))
		.pipe(concat('app.css'))
		.pipe(gulp.dest('dist'))
});

gulp.task('scripts', () => {	
	gulp.src(paths.scripts)
		.pipe(babel({modules: 'ignore'}))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist'))

	gulp.src(paths.templates)
		.pipe(react({harmony: false, es6module: true}))
		.pipe(babel({modules: 'ignore', stage: 0}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('dist'))	
});

gulp.task('vendor', () => {	
	let scripts = [
		'node_modules/material-design-lite/material.min.js', 
		'node_modules/react/dist/react-with-addons.min.js']
	let styles = [
		'node_modules/material-design-lite/material.min.css'
	]

	gulp.src(scripts)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('dist'))

	gulp.src(styles)
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('dist'))
});

gulp.task('watch', ['scripts', 'styles'],() => {
	gulp.watch(paths.scripts, ['scripts'])
	gulp.watch(paths.templates, ['scripts'])
	gulp.watch(paths.styles, ['styles'])
})

gulp.task('build', ['styles', 'scripts', 'vendor'])
gulp.task('default', ['build'])