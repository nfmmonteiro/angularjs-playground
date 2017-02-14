import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import helloComponent from './components/hello/hello.component';

const helloApp = angular.module('helloApp', []);

helloApp.component('helloComponent', helloComponent);