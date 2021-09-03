const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */

mix.sass('resources/sass/app.scss', 'css')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
    }).setPublicPath('dist');