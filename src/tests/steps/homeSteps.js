const {Given, When, Then} = require("@cucumber/cucumber");
const { expect } = require('@playwright/test');
const { HomePage } = require('../../pages/homePage');

let homePage = new HomePage();

Given('I visit {string} website', async function (string) {
    await homePage.goTo();
});

Given('I log in with a valid mobile number', async function () {
    await homePage.loginFunction();
});

Given('I click on the {string}', async function (string) {
    await homePage.clickBtn(string);
});

Then('I click on the {string} to go to {string}', async function(string1, string2){
    await homePage.clickAndCheck(string1, string2);
})

Then('I should be navigated to the {string} box', async function(string){
    await homePage.checkCallBack(string);
})

Then('I should be navigated to the {string}', async function(string){
    await homePage.verifyPageTitle(string);
})

Then('I set my location {string}', async function(string){
    await homePage.setLocation(string);
})

Then('I select city from Popular cities', async function(){
    await homePage.setLocation2();
})

Then('NEED A CAR LOAN should be visible in the first fold', async function () {
    await homePage.checkNeedLoan();
});

Then('I click on the KNOW MORE link for {string}', async function (string) {
    await homePage.clickKnowMore(string);
});


Then('I should be navigated to the {string} URL', async function (string) {
    await homePage.checkURL(string);
});

Then('I scroll down and {string} section should be visible', async function (string) {
    if(string == "Buy in 3 easy steps"){
        await homePage.verifyBuyIn3Steps();
    }else if(string == "Cars by category"){
        await homePage.verifyCarsByCategory();
    }else if(string == "OTHER GEOGRAPHIES"){
        await homePage.verifyOtherGeo();
    }else if(string == "CARS24 in the news"){
        await homePage.verifyCars24InNews();
    }else if(string == 'Why buy from us ?'){
        await homePage.verifyWhyBuyFromUs();
    }else if(string == 'KEEP IN TOUCH'){
        await homePage.verifyKeepInTouch();
    }else if(string == 'USEFUL LINKS'){
        await homePage.verifyUsefulLinks();
    }else if(string == 'POPULAR SEARCHES'){
        await homePage.verifyPopularSearches();
    }
});

Then('I hover over any {string} option and cars count should be visible', async function (string) {
    await homePage.hoverAndCount(string);  
});

Then('I should be navigated to the {string} in {string} range', async function (string1, string2) {
    await homePage.verifyPageTitle(string1);
    await homePage.chipList(string2);
});

Then('I should be navigated to the {string} of a popular City', async function(string){
    await homePage.verifyPageTitle2(string);
})

Then('I set my location {string} in the search bar', async function(string){
    await homePage.setLocation3(string);
})

Then('I should see the {string} text', async function(string){
    await homePage.checkText(string);
})

Then('I should see the {string} button', async function(string){
    await homePage.checkChangeLocationBtn(string);
})

Then('I see the following features: {string}', async function(string){
    await homePage.checkFeatures(string);
})

When('I click on the READ MORE link for the {string} news tile to go to {string}', async function (string1, string2) {
    await homePage.clickReadMore(string1, string2);
});

    Given('the user clicks on the Select Your City dropdown', async function () {
    await homePage.selctCItyDropdown();

  });

  Given('the user scrolls down on the page to the Happy Driving Stories Section', async function () {
    await homePage.scrollDownToStroies45k();
  });

  Then('the {string} title should be available', async function (string) {
    await homePage.stories45Text();
  });

  Then('the user clicks on the right arrow in the Happy Driving Stories Section', async function () {
    await homePage.clicksOnTheRightArrow();
  });

  Then('the user clicks on the left arrow in the Happy Driving Stories Section', async function () {
    await homePage.clicksOnTheLeftArrow();
  });

  Then('{string}, {string}, {string} with each car tile in the Happy Driving Stories Section', async function (string, string2, string3) {
    await homePage.verifyCarnameCustomernameOnStroies45();
   
});

When('the user scrolls down to the Recently Viewed Cars section', async function () {
    await homePage.scrollDownToRecentlyViewedCars();
  });


