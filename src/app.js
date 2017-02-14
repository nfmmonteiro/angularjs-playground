import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import ngAnimate from 'angular-animate';

import helloComponent from './components/hello/hello.component';
import countryListComponent from './components/country-list/country-list.component';

const helloApp = angular.module('helloApp', [ngAnimate]);

import countryDb from './resources/countries.json';
helloApp.value('countryDb', countryDb);

helloApp.component('helloComponent', helloComponent);
helloApp.component('countryListComponent', countryListComponent);
