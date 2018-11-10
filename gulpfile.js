const elixir = require('laravel-elixir');
const nunjucksRender = require('gulp-nunjucks-render');

elixir.extend('nunjucts', function() {
    new elixir.Task('nunjucts', function() {
        return gulp.src('resources/views/**/*.+(html|nunjucks)')
        // Renders template with nunjucks
		.pipe(nunjucksRender({
	      	path: ['resources/templates/']
	    }))
		// output files
	    .pipe(gulp.dest('public'))
    })
    .watch(['./resources/templates/**/*', './resources/views/**/*']);
});

elixir(mix => {
	// compile views
	mix.nunjucts();
	// compile assets
    mix.sass('app.scss')
       .webpack('app.js');
    // Resources Image
    mix.copy('resources/assets/img', 'public/img');
    mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts');
    // Resources Font
       mix.copy('resources/assets/fonts', 'public/fonts');
    // browsersync live reload
    mix.browserSync({
    	proxy: false,
    	server: "public",
        files: ['public/*.html', 'public/css/*.css', 'public/js/*.js']
    });
});