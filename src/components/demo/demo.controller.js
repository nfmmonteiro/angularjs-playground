class DemoController {

    /*@ngInject*/
    constructor($scope, $log, countryDb) {
        this.$scope = $scope;
        this.$log = $log;
        this.countryDb = countryDb;
    }

    $onInit() {
        this.filterWatcher = this.$scope.$watch(() => this.selectedCountry, (newValue) => {
            this.countries = (newValue ? this.filterCountries(newValue) : this.countryDb.list);
        });
    }

    filterCountries(value) {
        this.$log.log(`Filtering countries with ${this.selectedCountry}`);
        let filtered = [];
        for (let index = 0; index < this.countryDb.list.length; index++) {
            if (this.countryDb.list[index].name.toUpperCase().indexOf(value.toUpperCase()) !== -1) {
                filtered.push(this.countryDb.list[index]);
            }
        }
        return filtered;
    }

    $onDestroy() {
        if (this.filterWatcher) {
            this.filterWatcher();
        }
    }
}

export default DemoController;