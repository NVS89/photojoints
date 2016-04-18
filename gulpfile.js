//define references
var gulp = require('gulp'),
    rimraf = require('rimraf'),
    fs = require('fs');

// initiate file reading

//define paths
var paths = {
    bower:"./bower_components/",
    lib:"./public/lib/"
};

//clean lib folder

gulp.task('clean', function(callback){
    rimraf(paths.lib,callback)
});


//copy libraries to lib folder
gulp.task('copy',function(){
    var bower = {
        "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
        "jquery": "jquery/dist/jquery*.{js,map}",
        "angular": "angular/angular*.{js,map}",
        "angular-resource": "angular-resource/angular-resource*.{js,map}",
        "angular-ui-router": "angular-ui-router/release/angular-ui-router*.{js,map}",
        "angular-messages": "angular-messages/angular-messages*.{js,map}"
    }
    for (var destinationDir in bower){
        gulp.src( paths.bower + bower[destinationDir])
            .pipe(gulp.dest(paths.lib + destinationDir))
    }

});