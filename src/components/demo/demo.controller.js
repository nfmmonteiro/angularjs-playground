class DemoController {

    /*@ngInject*/
    constructor($scope, $log, countryList) {
        this.$scope = $scope;
        this.$log = $log;
        this.countryList = countryList;
    }

    $onInit() {
        this.filterWatcher = this.$scope.$watch(() => this.selectedCountry, (newValue) => {
            this.filteredCountries = (newValue ? this.filterCountries(newValue) : this.countryList);
        });
    }

    filterCountries(value) {
        this.$log.log(`Filtering countries with ${value}`);
        let filtered = [];
        for (let index = 0; index < this.countryList.length; index++) {
            if (this.countryList[index].name.toUpperCase().indexOf(value.toUpperCase()) !== -1) {
                filtered.push(this.countryList[index]);
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