import template from './typeahead.html';

let component = {
    bindings: {
        countries: '<',
        selectedCountry: '='
    },
    template: template
};

export default component;