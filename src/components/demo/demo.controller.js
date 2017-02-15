class DemoController {

    /*@ngInject*/
    constructor($log, countryDb) {
        this.$log = $log;
        this.countryDb = countryDb;
    }

    $onInit() {
        this.countries = this.countryDb.list;
    }
}

export default DemoController;