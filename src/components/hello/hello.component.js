import template from './hello.html';
import controller from './hello.controller';

let helloComponent = {
    bindings: {
        name: '@'
    },
    template: template,
    controller: controller,
    controllerAs: '$ctrl'
};

export default helloComponent;