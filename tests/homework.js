module.exports = {
    'Homework test'(browser){
        const oneWayInputSelector = '#oneway';
        const fromInputSelector = '#bookFlightOriginInput';
        const fromInputValueSelector = '#autocomplete-item-2';
        const toInputSelector = '#bookFlightDestinationInput';
        const toInputValueSelector = "#autocomplete-item-0";
        const departDateInputSelector = '#DepartDate';
        const departDateValue = "Aug 20";
        const classTypeSelector = '#cabinType';
        const classTypeValue = '1';
        const submitButtonSelector = 'button[type="submit"]';
        const flightResults = '#flightResults-content';
        const sortFilterSelector = 'section div.app-components-Shopping-ResultSortFilter-styles__popupModalWrapper--1_70P';
        const sortByFieldSelector = 'select[class="atm-c-select atm-c-select-field__control"] option[value="ECONOMY"]';
        const applyFilterButtonSelector = 'div[class="atm-c-btn-group atm-c-btn-group--align-right"] button:nth-child(2)';
        
        browser
            .url('https://www.united.com/')
            .click(oneWayInputSelector)
            .pause(1000)
            .clearValue(fromInputSelector)
            .pause(1000)
            .setValue(fromInputSelector, ['New Y'])
            .pause(200)
            .click(fromInputValueSelector)
            .clearValue(toInputSelector)
            .pause(1000)
            .setValue(toInputSelector, ['Miami '])
            .pause(200)
            .click(toInputValueSelector)
            .click(departDateInputSelector)
            .clearValue(departDateInputSelector)
            .setValue(departDateInputSelector, departDateValue)
            .setValue(classTypeSelector, classTypeValue)
            .click(submitButtonSelector)
            .waitForElementVisible(flightResults, 3000)
            .click(sortFilterSelector)
            .waitForElementVisible(sortFilterSelector, 1000)
            .click(sortByFieldSelector)
            .click(applyFilterButtonSelector)
            .waitForElementVisible(flightResults, 3000)
            .elements('css selector', 'div[class^="app-components-Shopping-GridItem-styles__flightRow--"]', function(result){
                result.value.map(function(element, err){
                    browser.elementIdText(element.ELEMENT, async (result) => {
                        const res = await result;
                        // const arr = result.split('\n');
                        
                        console.log(res);
                    })
                })
            })
        browser.saveScreenshot('tests_output/test.png')
    }
}