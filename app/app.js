'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'pascalprecht.translate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.config(function($translateProvider) {
  $translateProvider
    .useStaticFilesLoader({
      prefix: 'l10n/',
      suffix: '.json'
    })
    .useSanitizeValueStrategy('escaped')
    .registerAvailableLanguageKeys(['en', 'es'], {
      'en_*': 'en',
      'es_*': 'es'
      // When adding more languages, do not forget to add them for "moment"
      // in the vendor.js section of gulpfile.js
    })
    .fallbackLanguage('en')
    //.determinePreferredLanguage();
    .preferredLanguage('ca')
});
