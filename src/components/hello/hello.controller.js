class HelloController {

    /** @ngInject */
    constructor($log) {
        this.$log = $log;
        this.$log.log('HelloController was created!');
    }

    $onInit() {
        this.$log.log(`HelloController was initialised! Name is defined as: ${this.name}`);
    }
}

export default HelloController;