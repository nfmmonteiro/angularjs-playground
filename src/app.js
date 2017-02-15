import "bootstrap/dist/css/bootstrap.css";
import angular from "angular";
import ngAnimate from "angular-animate";
import angularUiBootstrap from "angular-ui-bootstrap";
import helloComponent from "./components/hello/hello.component";
import countryListComponent from "./components/country-list/country-list.component";
import demoComponent from "./components/demo/demo.component";
import countryDb from "./resources/countries.json";

angular.module('demoApp', [ngAnimate, angularUiBootstrap])
    .component('helloComponent', helloComponent)
    .component('countryListComponent', countryListComponent)
    .component('demoComponent', demoComponent)
    .value('countryDb', countryDb);