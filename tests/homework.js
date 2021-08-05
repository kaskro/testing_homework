module.exports = {
    'Homework test'(browser){
        const page = browser.page.united();
        let flightObjectsArray = [];
        
        page
            .navigate()
            .selectOneWay('@oneWayInput')
            .fillField('@fromInput', 'New Y', '@fromInputValue')
            .fillField('@toInput', 'Miami ', '@toInputValue')
            .selectDate('@departDateInput', 'Aug 20')
            .selectCabinType('@cabinType', '1')
            .submitSearch()
            .waitForFlightResults('@flightResults', 3000)
            .applySortFilter()
            .waitForFlightResults('@flightResults', 3000)

            browser.elements('css selector', 'div[class^="app-components-Shopping-GridItem-styles__flightRow--"]', function(result){
                result.value.map(function(element, err){
                   browser.elementIdText(element.ELEMENT, function(result) {
                           let arr = result.value.split('\n');
                           let flightObject = {
                            'Depart' : arr[2],
                            'Arrive' : arr[5],
                            'Stops' : arr[1],
                            'Duration' : arr[10],
                            'Price' : arr[36]
                           }
                           flightObjectsArray.push(flightObject);
                   })
                })
            }).perform(function() {
                console.log(flightObjectsArray);
            })
    }
}