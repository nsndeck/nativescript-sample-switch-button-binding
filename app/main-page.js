var observableModule = require("data/observable");
var ObservableEventData = require("data/observable");

var page;

var pageData = new observableModule.Observable({// switchers status
    's1': false,
    's2': true,
    's3': false,
    's4': true
});

exports.loaded = function(eventData) {
    // binding context
    page = eventData.object;
    page.bindingContext = pageData;
};