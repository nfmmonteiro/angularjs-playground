import template from './country-list.html';
import controller from './country-list.controller';

let component = {
    bindings: {
        countries: '<'
    },
    controller: controller,
    template: template
};

export default component;