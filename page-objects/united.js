module.exports = {
    url: 'https://www.united.com/',
    elements: {
        oneWayInput : '#oneway',
        fromInput : '#bookFlightOriginInput',
        fromInputValue : '#autocomplete-item-2',
        toInput : '#bookFlightDestinationInput',
        toInputValue : "#autocomplete-item-0",
        departDateInput : '#DepartDate',
        cabinType : '#cabinType',
        submitButton : 'button[type="submit"]',
        flightResults : '#flightResults-content',
        sortFilterButton : 'section div.app-components-Shopping-ResultSortFilter-styles__popupModalWrapper--1_70P',
        sortByDropdown : 'select[class="atm-c-select atm-c-select-field__control"] option[value="ECONOMY"]',
        applyFilterButton : 'div[class="atm-c-btn-group atm-c-btn-group--align-right"] button:nth-child(2)'
    },
    commands: [{
        selectOneWay(selector){
            return this
                .click(selector)
        },
        fillField(selector, searchString, value){
            return this
                .clearValue(selector)
                .pause(1000)
                .setValue(selector, [searchString])
                .pause(200)
                .click(value)
        },
        selectDate(selector, value) {
            return this
                .click(selector)
                .clearValue(selector)
                .pause(1000)
                .setValue(selector, value)
        },
        selectCabinType(selector, value){
            return this
                .setValue(selector, value)
        },
        submitSearch(){
            return this
                .click('@submitButton')
        },
        waitForFlightResults(selector, delay){
            return this
                .waitForElementVisible(selector, delay)
        },
        applySortFilter(){
            return this
                .click('@sortFilterButton')
                .waitForElementVisible('@sortFilterButton', 1000)
                .click('@sortByDropdown')
                .click('@applyFilterButton')
        }
    }]
}