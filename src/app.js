import "bootstrap/dist/css/bootstrap.css";
import angular from "angular";
import ngAnimate from "angular-animate";
import angularUiBootstrap from "angular-ui-bootstrap";
import helloComponent from "./components/hello/hello.component";
import countryListComponent from "./components/country-list/country-list.component";
import typeaheadComponent from "./components/typeahead/typeahead.component";
import demoComponent from "./components/demo/demo.component";
import countryDb from "country-db";

angular.module('demoApp', [ngAnimate, angularUiBootstrap])
    .component('helloComponent', helloComponent)
    .component('countryListComponent', countryListComponent)
    .component('typeaheadComponent', typeaheadComponent)
    .component('demoComponent', demoComponent)
    .value('countryList', countryDb.getAllCountries());