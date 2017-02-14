class CountryController {
    /*@ngInject*/
    constructor($log, countryDb) {
        this.$log = $log;
        this.countryDb = countryDb;
        this.$log.log('CountryController was created!');
    }

    $onInit() {
        this.countries = this.countryDb.list;
    }
}

export default CountryController;