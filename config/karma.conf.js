basePath = '../app';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    '../test/lib/jquery.min.js',
    'lib/angular/angular.js',
    'lib/angular/angular-*.js',
    '../test/lib/angular/angular-mocks.js',
    '../test/lib/sinon-1.7.3.js',
    'js/**/*.js',
    '../test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
