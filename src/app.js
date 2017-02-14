import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import ngAnimate from 'angular-animate';

import helloComponent from './components/hello/hello.component';

const helloApp = angular.module('helloApp', [ngAnimate]);

helloApp.component('helloComponent', helloComponent);