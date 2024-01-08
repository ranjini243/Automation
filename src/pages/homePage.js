const { expect } = require('@playwright/test');
const { time } = require('console');
const exp = require('constants');


class HomePage {
     constructor() {
      this.accountDropDown = 'xpath=//html/body/div/header/div/div[3]/div[2]/div[1]/div/strong';
      this.loginBtn = 'xpath=//html/body/div/header/div/div[3]/div[2]/div[2]/button';
      this.mobileNoInput = 'xpath=//html/body/div[4]/div/div/div/div[2]/div[1]/div[1]/div/div/input';
      this.getOtpBtn = 'xpath=//html/body/div[4]/div/div/div/div[2]/div[1]/button';
      this.otpInput = 'xpath=//html/body/div[4]/div/div/div/div[2]/div/div[2]/div/div/input';
      this.verifyOtpBtn = 'xpath=//html/body/div[4]/div/div/div/div[2]/div/button';
      this.viewAllCarsBtn = 'xpath=//html/body/div[1]/div[1]/div[1]/div[2]/div/div[2]/div/button';
      this.myLocationParent = 'xpath=//html/body/div[4]/div/div/div';
      this.myLocation = 'xpath=//html/body/div[4]/div/div/div/div/div/div[2]/div[2]/button';
      this.searchCity = 'xpath=//html/body/div[4]/div/div/div/div[2]/div[1]/div[1]/div/input';
      this.cityURL = 'xpath=//html/body/div[4]/div/div/div/div[2]/div[2]/div/ul/li/a';
      this.locationHandler = 'xpath=//html/body/div[2]/header/div/div[1]/div[2]/p';
      this.needLoan = 'xpath=//html/body/div[1]/div[1]/div[2]/div[1]/div[1]';
      this.eligibiltyBtn = 'xpath=//html/body/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/button'; 
      this.buyContainer = 'xpath=//html/body/div[1]/div[1]/div[3]';   
      this.buyHeadingSelector = 'xpath=//html/body/div[1]/div[1]/div[3]/section[1]/div/h2';
      this.readFAQ = 'xpath=//html/body/div[1]/div[1]/div[3]/section[1]/div/div/div/p/a';
      this.carsByCategoryContainer = 'xpath=//html/body/div[1]/div[1]/div[3]/section[2]';
      this.carsByCategoryHeading = 'xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/h2';
      this.categoryList = 'xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/div[1]/ul/li';
      this.budgetBtn = 'xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/div[2]/ul/li[2]/strong';
      this.chipListSelector = 'xpath=//html/body/div/div[1]/div[2]/div/div/div[2]/div[2]/div/ul/li';
      this.comingSoonSelector = 'xpath=//html/body/div[4]/div/div/div/div/div/div/h3';
      this.needHelpSelector = 'xpath=//html/body/div/div[3]/div';
      this.helpAndSupportSelector = 'xpath=//html/body/div/div[4]/div[1]/h4';
      this.whatsAppLocator = 'xpath=//html/body/div/div[4]/div[2]/div';
      this.faqLocator = 'xpath=//html/body/div/div[4]/div[4]/div';
      this.callBackLocator = 'xpath=//html/body/div/div[4]/div[3]/div';
      this.mailUsLocator = 'xpath=//html/body/div/div[4]/a/div';
      this.uaeLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[2]/ul/li[1]/a';
      this.thailandLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[2]/ul/li[2]/a';
      this.ausLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[2]/ul/li[3]/a';
      this.yearBtnLocator = 'xpath=//html/body/div/div[1]/div[3]/section[2]/div/div[1]/ul/li[2]';
      this.bodyTypeBtnLocator = 'xpath=//html/body/div/div[1]/div[3]/section[2]/div/div[1]/ul/li[3]';
      this.fuelTypeBtnLocator = 'xpath=//html/body/div/div[1]/div[3]/section[2]/div/div[1]/ul/li[4]';
      this.faceBookLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/ul/li[1]/a';
      this.twitterLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/ul/li[2]/a';
      this.youtubeLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/ul/li[3]/a';
      this.linkedinLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/ul/li[4]/a';
      this.instaLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/ul/li[5]/a';
      this.googlePlayLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/div/a[1]';
      this.appStoreLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/div/a[2]';
      this.contactUsLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[1]/a';
      this.securityLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[2]/a'
      this.insuranceLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[3]/a';
      this.aboutUsLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[4]/a';
      this.privacyPolicyLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[5]/a';
      this.tncLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[6]/a';
      this.faQLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[7]/a';
      this.testimonialLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[8]/a';
      this.blogLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[9]/a';
      this.hiringLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[10]/a';
      this.partnerLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[11]/a';
      this.loanLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[12]/a';
      this.rcLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[13]/a';
      this.financeLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[14]/a';   
      this.investorLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/ul/li[15]/a';       
      this.pricingLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[1]/ul/li[2]/a';
      this.sellUsedCarLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[1]/ul/li[3]/a';
      this.vOTLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[1]/ul/li[4]/a';
      this.usedCarLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[1]/ul/li[5]/a';
      this.checkChallanLocator = 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[1]/ul/li[1]/a';
      this.stroies45kplusText= 'xpath=//html/body/div/div[1]/section[4]/div/div/h2';
      this.stroies45kplusdiv = 'xpath=//html/body/div/div[1]/section[4]';
      this.pageSelector='xpath=//html/body/div/div[1]';
      this.hapyCustomerTile ='xpath=//html/body/div/div[1]/section[4]/div/div/div/div/div/div/div/div[1]/div';
     }
    
    async goTo(string){
        await page.goto("https://www.cars24.com/");
        await page.waitForLoadState();
        await page.waitForTimeout(6000);  
    }

    async clickBtn(string){
        let timeout = 1000;
        let location = '';
        console.log(string);
        switch(string) {
            case 'Account':
                location = this.accountDropDown;
                break;
            case "Login":
                location = this.loginBtn;
                break;
            case "VIEW ALL CARS":
                location = this.viewAllCarsBtn;
                timeout = 2000;
               break;
            case "CHECK ELIGIBILITY":
                location = this.eligibiltyBtn;
                timeout = 1500;
                break;
            case "Read our FAQs":
                location = this.readFAQ;
                timeout = 1500;
                break;
            case "Any Option":
                location = this.budgetBtn;
                timeout = 1500;
                break;
            case "Need help?":
                location = this.needHelpSelector;
                timeout = 1500;
                break; 
            case "View FAQ's":
                location = this.faqLocator;
                timeout = 1500;
                break; 
            case "Request a call back":
                location = this.callBackLocator;
                timeout = 1500;
                break;
            case "Mail us":
                location = this.mailUsLocator;
                timeout = 3000;
                break;
            case "Year":
                location = this.yearBtnLocator;
                timeout = 500;
                break;
            case "Body type":
                location = this.bodyTypeBtnLocator;
                timeout = 500;
                break;
            case "Fuel type":
                location = this.fuelTypeBtnLocator;
                timeout = 500;
                break;
            case "Google Play":
                location = this.googlePlayLocator;
                timeout = 1500;
                break;
            case "App Store":
                location = this.appStoreLocator;
                timeout = 1500;
                break;
            case "Contact us":
                location = this.contactUsLocator;
                timeout = 1500;
                break;
            case "Security":
                location = this.securityLocator;
                timeout = 1500;
                break;
            case "Motor Insurance":
                location = this.insuranceLocator;
                timeout = 1500;
                break;
            case "About Us":
                location = this.aboutUsLocator;
                timeout = 1500;
                break;
            case "Privacy Policy":
                location = this.privacyPolicyLocator;
                timeout = 1500;
                break;
            case "Terms and conditions":
                location = this.tncLocator;
                timeout = 1500;
                break;
            case "FAQ":
                location = this.faQLocator;
                timeout = 1500;
                break;
            case "Blog":
                location = this.blogLocator;
                timeout = 1500;
                break;
            case "Testimonial":
                location = this.testimonialLocator;
                timeout = 1500;
                break;
            case "We 're hiring":
                location = this.hiringLocator;
                timeout = 1500;
                break;
            case "Become Our Partner":
                location = this.partnerLocator;
                timeout = 1500;
                break;
            case "Need a loan":
                location = this.loanLocator;
                timeout = 1500;
                break;
            case "RC Transfer Status":
                location = this.rcLocator;
                timeout = 1500;
                break;
            case "Car24 Finance":
                location = this.financeLocator;
                timeout = 1500;
                break;
            case "Investors":
                location = this.investorLocator;
                timeout = 1500;
                break;
            case "CARS24 Pricing":
                location = this.pricingLocator;
                timeout = 1500;
                break;
            case "Sell used car":
                location = this.sellUsedCarLocator;
                timeout = 1500;
                break;
            case "Vehicle Ownership transfer":
                location = this.vOTLocator;
                timeout = 1500;
                break;
            case "Used Car Valuation":
                location = this.usedCarLocator;
                timeout = 1500;
                break;
            case "Check challan":
                location = this.checkChallanLocator;
                timeout = 1500;
                break;
        }

        await page.locator(location).click();
        await page.waitForTimeout(timeout);  
    }

    async clickKnowMore(string){
        const knowMoreArray = ['xpath=//html/body/div/div[1]/div[2]/div[3]/div/div[1]/div[2]/span', 'xpath=//html/body/div/div[1]/div[2]/div[3]/div/div[2]/div[2]/span', 'xpath=//html/body/div/div[1]/div[2]/div[3]/div/div[3]/div[2]/span', 'xpath=//html/body/div/div[1]/div[2]/div[3]/div/div[4]/div[2]/span'];
        let location = '';
        let timeout = 1000;
        switch(string){
            case "warranty":
                location = knowMoreArray[0];
                break;
            case "return":
                location = knowMoreArray[1];
                break; 
            case "finance":
                location = knowMoreArray[2];
                break;
            case "quality check":
                location = knowMoreArray[3];
                break;
                
        }
        console.log(location);
        await page.locator(location).click();
        await page.waitForTimeout(timeout);  

    }

    async clickAndCheck(string1, string2){
        let urlText = string2;
        let locator = '';
        if(string1 == 'Ask us on WhatsApp!'){
            urlText = 'whatsapp.com';
            locator = this.whatsAppLocator;
        }else if(string1 == "UAE"){
            locator = this.uaeLocator;
        }else if(string1 == "Thailand"){
            locator = this.thailandLocator;
        }else if(string1 == "Australia"){
            locator = this.ausLocator;
        }else if(string1 == "Facebook"){
            locator = this.faceBookLocator;
            urlText = 'cars24india';
        }else if(string1 == "Twitter"){
            locator = this.twitterLocator;
        }else if(string1 == "YouTube"){
            locator = this.youtubeLocator;
            urlText = "youtube.com";
        }else if(string1 == "LinkedIn"){
            locator = this.linkedinLocator;
        }else if(string1 == "Instagram"){
            locator = this.instaLocator;
            urlText = "instagram.com";
        }
        let redirected = false;

        page.on('popup', async (newPage) => {
            if (newPage.url().includes(urlText)) {
                redirected = true;
                await newPage.close(); // Close the new tab
            }
        });

        await page.locator(locator).click();
        await page.waitForTimeout(3000); 
        
        expect(redirected).toBe(true); 
    }

    async clickFAQ(string){
        await page.locator(this.faqLocator).click();
        await page.waitForTimeout(3000);
    }

    async checkCallBack(string){
        const callBackLocator = 'xpath=//html/body/div/div[5]/div[1]/h4';
        const callMeBtn = 'xpath=//html/body/div/div[5]/button';

        await page.waitForSelector(callBackLocator);
        
          const content = await page.$eval(callBackLocator, (element) => {
            return element.textContent;
          });
          console.log(content)
        
        expect(content).toContain('Request call back');

        const button = await page.$(callMeBtn);

        await expect(button).toBeDefined();
        
        const content2 = await page.$eval(callMeBtn, (element) => {
            return element.textContent;
          });
          console.log(content2)
        
        expect(content2).toContain('CALL ME');
    }

    async setLocation(string){
        await page.locator(this.viewAllCarsBtn).click();
        await page.waitForSelector(this.myLocationParent, { state: 'visible' });
        await page.locator(this.myLocation).click();
        await page.waitForTimeout(500);
        await page.locator(this.searchCity).fill(string);
        await page.waitForTimeout(500);
        await page.locator(this.cityURL).click();
        await page.waitForTimeout(1000);
    }

    async setLocation2(){
        const cityImageSelector = 'xpath=//html/body/div[4]/div/div/div/div[2]/div[2]/div/ul/li[3]/a/span/img';
        const locationSelector = 'xpath=//html/body/div/header/div/div[1]/div[2]';
        await page.locator(locationSelector).click();
        await page.waitForSelector(this.searchCity, { state: 'visible' });
        await page.waitForTimeout(500);
        await page.locator(cityImageSelector).click();
        await page.waitForTimeout(5000);
    }

    async setLocation3(string){
        const locationSelector = 'xpath=//html/body/div/header/div/div[1]/div[2]';
        const durgapurSelector = 'xpath=//html/body/div[4]/div/div/div/div[2]/div[2]/div/div/div/div/ul/li/a';
        await page.locator(locationSelector).click();
        await page.locator(this.searchCity).fill(string);
        //await page.waitForTimeout(500);
        if(string == 'Durgapur'){
            await page.locator(durgapurSelector).click();
            await page.waitForTimeout(5000);
        }else{
            await page.locator(this.cityURL).click();
            await page.waitForTimeout(5000);
        }
            
    }

    async selctCItyDropdown(){
        console.log("Before clicking on the dropdown");
        await page.locator('xpath=/html/body/div[2]/header/div/div[1]/div[2]').click({ timeout: 60000 });
        console.log("After clicking on the dropdown");

    }

    async loginFunction(){
        const mobileNumber = '8318725977';

        await page.locator(this.mobileNoInput).fill(mobileNumber);
        await page.waitForTimeout(500);

        await page.locator(this.getOtpBtn).click();
        await page.waitForTimeout(500);

        const otp = await new Promise((resolve) => {
            console.log('Please enter OTP:');
            process.stdin.once('data', (data) => {
                resolve(data.toString().trim());
            });
        });

        await page.locator(this.otpInput).fill(otp);
        await page.waitForTimeout(500);

        await page.locator(this.verifyOtpBtn).click();
        // Wait for navigation 
        await page.waitForTimeout(5000);

    }

    async verifyPageTitle(string){
        let expectedPageTitle = '';
        switch(string) {
            case 'Listing Page':
                expectedPageTitle = 'Used Cars in New Delhi';
                break;
        } 

        const pageTitle = await page.title();
        expect(pageTitle).toContain(expectedPageTitle);
    }

    async checkNeedLoan(){
        await page.waitForSelector(this.needLoan, { state: 'visible' });
        const headingSelector = 'xpath=//html/body/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div/div/h4'; // Replace with the actual selector
        const heading = await page.$(headingSelector);

        await expect(heading).toBeDefined(); // Assert that the heading is present

        // Assuming your button has the text 'Your Button'
        const button = await page.$(this.eligibiltyBtn);

        await expect(button).toBeDefined(); 
    }

    async checkURL(string){
        let expectedURL = '';
        switch (string) {
            case 'Homepage':
                expectedURL = 'https://www.cars24.com/finance/personal-details?redirectTo=/&cfSource=HOME_PAGE'
                break;
            case "View FAQ's":
                expectedURL = 'https://www.cars24.com/faq/#buy'
                break;
            case "View FAQ":
                expectedURL = 'https://www.cars24.com/faq#buy'
                break;
            case "Cars24 Warranty":
                expectedURL = 'https://www.cars24.com/why-cars24/warranty'
                break;
            case "7-Day Return":
                expectedURL = 'https://www.cars24.com/why-cars24/return'
                break;
            case "Easy Financing Options":
                expectedURL = 'https://www.cars24.com/why-cars24/finance'
                break;
            case "140-Quality Checks":
                expectedURL = 'https://www.cars24.com/why-cars24/quality'
                break;
            case "Google Play":
                expectedURL = 'https://play.google.com/store/apps/details?id=com.cars24.seller&referrer=utm_source%3Dapp-download%26utm_medium%3Dweb-footer'
                break;
            case "App Store":
                expectedURL = 'https://apps.apple.com/in/app/cars24-sell-buy-used-cars/id1364492085'
                break;
            case "Contact us":
                expectedURL = 'https://www.cars24.com/contact/'
                break;
            case "Security":
                expectedURL = 'https://www.cars24.com/security/';
                break;
            case "Motor Insurance":
                expectedURL = 'https://www.cars24.com/insurance/';
                break;
            case "About Us":
                expectedURL = 'https://www.cars24.com/about-us/';
                break;
            case "Privacy Policy":
                expectedURL = 'https://www.cars24.com/privacy-policy/';
                break;
            case "Terms and conditions":
                expectedURL = 'https://www.cars24.com/terms-and-conditions/';
                break;
            case "FAQ":
                expectedURL = 'https://www.cars24.com/faq/';
                break;
            case "Testimonial":
                expectedURL = 'https://www.cars24.com/testimonials/';
                break;
            case "We 're hiring":
                expectedURL = 'https://www.linkedin.com/';
                break;
            case "Become Our Partner":
                expectedURL = 'https://www.cars24.com/become-our-partner/';
                break;
            case "Need a loan":
                expectedURL = 'https://www.cars24.com/used-car-loan/';
                break;
            case "RC Transfer Status":
                expectedURL = 'https://www.cars24.com/rc-transfer/';
                break;
            case "Car24 Finance":
                expectedURL = 'https://www.cars24.com/financing/';
                break;
            case "Investors":
                expectedURL = 'https://www.cars24.com/investors/';
                break;
            case "Blog":
                expectedURL = 'https://www.cars24.com/blog/';
                break;
            case "Check challan":
                expectedURL = 'https://www.cars24.com/traffic-challan/';
                break;
            case "CARS24 Pricing":
                expectedURL = 'https://www.cars24.com/cars24-pricing/';
                break;
            case "Sell used car":
                expectedURL = 'https://www.cars24.com/sell-used-cars/';
                break;
            case "Vehicle Ownership transfer":
                expectedURL = 'https://www.cars24.com/vehicle-ownership-transfer/';
                break;
            case "Used Car Valuation":
                expectedURL = 'https://www.cars24.com/used-car-valuation/';
                break;
          }
        console.log(expectedURL);
        const result = await page.url();
        console.log(result);
        expect(result).toBe(expectedURL);

    }

    async verifyBuyIn3Steps(){
        await page.$eval(this.buyContainer, (element) => {
            element.scrollIntoView();
          });
        
          await page.waitForSelector(this.buyHeadingSelector);
        
          const content = await page.$eval(this.buyHeadingSelector, (element) => {
            return element.textContent;
          });
        
        expect(content).toContain('Buy in 3 easy steps');

        const divSelectorArray = ['xpath=//html/body/div[1]/div[1]/div[3]/section[1]/div/div/div/div[1]', 'xpath=//html/body/div[1]/div[1]/div[3]/section[1]/div/div/div/div[2]', 'xpath=//html/body/div[1]/div[1]/div[3]/section[1]/div/div/div/div[3]']; // Replace with the actual selector
        
        for(let i = 0; i < divSelectorArray.length; i++){
            const div = await page.$(divSelectorArray[i]);

            expect(div).toBeDefined(); // Assert that the div is present

            // Check if the div contains an image
            const img = await div.$('img');
            expect(img).toBeDefined(); // Assert that the img element is present

            // Check if the div contains text
            const textContent = await div.textContent();
            expect(textContent.trim()).not.toBeNull();
        }
        
    }

    async verifyCarsByCategory(){
        await page.$eval(this.buyContainer, (element) => {
            element.scrollIntoView();
        });

        await page.waitForSelector(this.carsByCategoryHeading);

        const content = await page.$eval(this.carsByCategoryHeading, (element) => {
            return element.textContent;
          });
        
        expect(content).toContain('Cars by category');

        await page.waitForSelector(this.categoryList, { state: 'visible' });
        const listItems = await page.$$(this.categoryList);

        const categoryArray = ['Budget', 'Year', 'Body type', 'Fuel type'];

        for(let i = 0; i < categoryArray.length; i++){
            let listItem = listItems[i];
            expect(listItem).not.toBeNull();
            expect(await listItem.innerText()).toContain(categoryArray[i]);
        }
    }

    async hoverAndCount(string) {
        const divSelectorArray = ['xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/div[2]/ul/li[1]', 'xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/div[2]/ul/li[2]', 'xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/div[2]/ul/li[3]', 'xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/div[2]/ul/li[4]', 'xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/div[2]/ul/li[5]'];

        const textSelectorArray = ['xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/div[2]/ul/li[1]/label', 'xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/div[2]/ul/li[2]/label', 'xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/div[2]/ul/li[3]/label', 'xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/div[2]/ul/li[4]/label', 'xpath=//html/body/div[1]/div[1]/div[3]/section[2]/div/div[2]/ul/li[5]/label'];
        let iterationLength = 0;
        if(string == 'budget'){
            iterationLength = 5;
        }else if(string == 'year'){
            iterationLength = 4;
        }else if(string == 'body type'){
            iterationLength = 5;
        }else if(string == 'fuel type'){
            iterationLength = 4;
        }

        for(let i = 0; i < iterationLength; i++){

            await page.hover(divSelectorArray[i]);
            await page.waitForTimeout(2000);

            await page.waitForSelector(textSelectorArray[i], { state: 'visible' });

            const displayedText = await page.textContent(textSelectorArray[i]);
            expect(displayedText.trim()).not.toEqual('');

            await page.mouse.move(0, 0);

            await page.waitForSelector(textSelectorArray[i], { state: 'hidden' });
        }   
    }

    async chipList(string) {
        await page.waitForSelector(this.chipListSelector, { state: 'visible' });
        const listItems = await page.$$(this.chipListSelector);

        const chipArray = string.split(', ');

        for(let i = 0; i < chipArray.length; i++){
            let listItem = listItems[i];
            expect(listItem).not.toBeNull();
            expect(await listItem.innerText()).toContain(chipArray[i]);
            let listItemImg = await listItem.$('img');
            expect(listItemImg).not.toBeNull();
        }
    }

    async verifyPageTitle2(string){
        let expectedPageTitle = '';
        switch(string) {
            case 'Listing Page':
                expectedPageTitle = `Used Cars in`;
                break;
        } 

        const pageTitle = await page.title();
        console.log(pageTitle);
        expect(pageTitle).toContain(expectedPageTitle);
        expect(pageTitle).toContain('Second Hand Cars for Sale');
        expect(pageTitle).not.toContain('New Delhi');

    }

    async checkText(string){
        let locator = '';
        let expectedText = '';
        if(string == "We are coming soon"){
            locator = this.comingSoonSelector;
            expectedText = 'We are coming soon!';
        }else if(string == "Help & Support"){
            locator = this.helpAndSupportSelector;
            expectedText = 'Help & Support';
            let divSelector = 'xpath=//html/body/div/div[4]';
            const divContainer = await page.$(divSelector);

            // Assert that the div container exists
            expect(divContainer).not.toBeNull();
        }
        await page.waitForSelector(locator, {state: 'visible'});
        

        const divElement = await page.$(locator);
        const divTextContent = await divElement.innerText();
        expect(divTextContent).toContain(expectedText);

    }

    async checkChangeLocationBtn(string){
        const changeLocation = 'xpath=//html/body/div[4]/div/div/div/div/div/div/button';
        const button = await page.$(changeLocation);
        const divTextContent = await button.innerText();

        expect(divTextContent).toContain('CHANGE LOCATION');
        await expect(button).toBeDefined(); 
    }

    async checkFeatures(string){
        const featuresArray = string.split(', ');

        const featuresHeadingSelectorArray = ['xpath=//html/body/div/div[4]/div[2]/div/h6', 'xpath=//html/body/div/div[4]/div[3]/div/h6', 'xpath=//html/body/div/div[4]/a/div/h6', 'xpath=//html/body/div/div[4]/div[4]/div/h6']
        
        for(let i = 0; i < featuresArray.length; i++){
            let content = await page.$eval(featuresHeadingSelectorArray[i], (element) => {
                console.log(element.textContent);
                return element.textContent;
              });
            
            expect(content).toContain(featuresArray[i]);
        }
    }

    async verifyOtherGeo(){
        const footer = 'xpath=//html/body/div/div[2]/footer';
        const headingSelector = 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[2]/h3';
        const countryListArray = ['xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[2]/ul/li[1]', 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[2]/ul/li[2]', 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[2]/ul/li[3]']
        const countryArray = ['UAE', 'Thailand', 'Australia'];

        await page.$eval(footer, (element) => {
            element.scrollIntoView();
        });

        await page.waitForSelector(headingSelector);

        const content = await page.$eval(headingSelector, (element) => {
            return element.textContent;
          });
        
        expect(content).toContain('OTHER GEOGRAPHIES');


        for(let i = 0; i < countryArray.length; i++){
            const div = await page.$(countryListArray[i]);

            expect(div).toBeDefined(); // Assert that the div is present

            // Check if the div contains text
            const textContent = await div.textContent();
            expect(textContent).toBe(countryArray[i]);
        }
    }
    
    async verifyCars24InNews(){
        const cars24InNewsSelector = 'xpath=//html/body/div/div[1]/section[5]';
        const cars24HeadingSelector = 'xpath=//html/body/div/div[1]/section[5]/div/h2';
        const newsTileList = ['xpath=//html/body/div/div[1]/section[5]/div/div/div/div/div[1]', 'xpath=//html/body/div/div[1]/section[5]/div/div/div/div/div[2]', 'xpath=//html/body/div/div[1]/section[5]/div/div/div/div/div[3]', 'xpath=//html/body/div/div[1]/section[5]/div/div/div/div/div[4]']

        await page.$eval(cars24InNewsSelector, (element) => {
            element.scrollIntoView();
        });

        await page.waitForSelector(cars24HeadingSelector);

        const content = await page.$eval(cars24HeadingSelector, (element) => {
            return element.textContent;
          });
        
        expect(content).toContain('CARS24 in the news');


        for(let i = 0; i < newsTileList.length; i++){
            const div = await page.$(newsTileList[i]);

            expect(div).toBeDefined(); // Assert that the div is present

            // Check if the div contains text
            const textContent = await div.textContent();
            console.log(textContent);
            expect(textContent).toContain("read more");
        }

    }

    async verifyWhyBuyFromUs(){
        const whyBuyFromUsSelector = 'xpath=//html/body/div/div[1]/div[2]/div[2]';
        const whyBuyFromUsHeadingSelector = 'xpath=//html/body/div/div[1]/div[2]/div[2]/h2';
        const whyBuyFromUsList = ['xpath=//html/body/div/div[1]/div[2]/div[3]/div/div[1]/div[2]', 'xpath=//html/body/div/div[1]/div[2]/div[3]/div/div[2]/div[2]', 'xpath=//html/body/div/div[1]/div[2]/div[3]/div/div[3]/div[2]', 'xpath=//html/body/div/div[1]/div[2]/div[3]/div/div[4]/div[2]']
        const whyBuyFromUsArray = ['CARS24 Warranty', '7-Day Return', 'Easy Financing Options', '140-Quality Checks'];
        await page.$eval(whyBuyFromUsSelector, (element) => {
            element.scrollIntoView();
        });

        await page.waitForSelector(whyBuyFromUsHeadingSelector);

        const content = await page.$eval(whyBuyFromUsHeadingSelector, (element) => {
            return element.textContent;
          });
        
        expect(content).toContain('Why buy from us ?');


        for(let i = 0; i < whyBuyFromUsList.length; i++){
            const div = await page.$(whyBuyFromUsList[i]);

            expect(div).toBeDefined(); // Assert that the div is present

            // Check if the div contains text
            const textContent = await div.textContent();
            console.log(textContent);
            expect(textContent).toContain(whyBuyFromUsArray[i]);

            expect(textContent).toContain("Know more");
        }
    }

    async verifyKeepInTouch(){
        const footer = 'xpath=//html/body/div/div[2]/footer';

        const keepInTouchContent = 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/p';
        const keepInTouchHeading = 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/h3';
        const keepInTouchList = ['xpath=//html/body/div/div[2]/footer/div/div/div[1]/ul/li[1]', 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/ul/li[2]', 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/ul/li[3]', 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/ul/li[4]', 'xpath=//html/body/div/div[2]/footer/div/div/div[1]/ul/li[5]']
        
        await page.$eval(footer, (element) => {
            element.scrollIntoView();
        });

        await page.waitForSelector(keepInTouchHeading);

        const content = await page.$eval(keepInTouchHeading, (element) => {
            return element.textContent;
          });
        
        expect(content).toContain('KEEP IN TOUCH');

        const content2 = await page.$eval(keepInTouchContent, (element) => {
            return element.textContent;
          });
        
        expect(content2).toContain('EXPERIENCE CARS24 APP ON MOBILE');
        expect(content2).toContain('Powered by CARS24');


        for(let i = 0; i < keepInTouchList.length; i++){
            const div = await page.$(keepInTouchList[i]);
            expect(div).toBeDefined(); 
        }

    }

    async verifyUsefulLinks(){
        const footer = 'xpath=//html/body/div/div[2]/footer';
        
        const usefulLinkContent = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]';
        const usefulLinksHeading = 'xpath=//html/body/div/div[2]/footer/div/div/div[2]/h3';
        
        const usefulLinkArray = ['Contact Us', 'Security', 'Motor insurance', 'About Us', 'Privacy Policy', 'Terms and Conditions', 'FAQ', 'Testimonials', 'Blog', 'Hiring', 'Become Our Partner', 'Need a Loan', 'RC Transfer Status', 'CARS24 Finance', 'Investors'];

        await page.$eval(footer, (element) => {
            element.scrollIntoView();
        });

        await page.waitForSelector(usefulLinksHeading);

        const content = await page.$eval(usefulLinksHeading, (element) => {
            return element.textContent;
          });
        
        expect(content).toContain('USEFUL LINKS');

        const content2 = await page.$eval(usefulLinkContent, (element) => {
            return element.textContent;
          });
        
        for(let i=0; i < usefulLinkArray.length; i++){
            expect(content2).toContain(usefulLinkArray[i]);
        }

    }

    async verifyPopularSearches(){
        const footer = 'xpath=//html/body/div/div[2]/footer';
        
        const popularSearchesContent = 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[1]';
        const popularSearchesHeading = 'xpath=//html/body/div/div[2]/footer/div/div/div[3]/div/div[1]/h3';
        
        const popularSearchesArray = ['Check challan', 'CARS24 Pricing', 'Sell Used Car', 'Vehicle Ownership Transfer', 'Used Car Valuation'];

        await page.$eval(footer, (element) => {
            element.scrollIntoView();
        });

        await page.waitForSelector(popularSearchesHeading);

        const content = await page.$eval(popularSearchesHeading, (element) => {
            return element.textContent;
          });
        
        expect(content).toContain('POPULAR SEARCHES');

        const content2 = await page.$eval(popularSearchesContent, (element) => {
            return element.textContent;
          });
        
        for(let i=0; i < popularSearchesArray.length; i++){
            expect(content2).toContain(popularSearchesArray[i]);
        }
    }

    async clickReadMore(string1, string2){
        const readMoreArray = ['xpath=//html/body/div/div[1]/section[5]/div/div/div/div/div[1]/div/div[2]/a', 'xpath=//html/body/div/div[1]/section[5]/div/div/div/div/div[2]/div/div[2]/a', 'xpath=//html/body/div/div[1]/section[5]/div/div/div/div/div[3]/div/div[2]/a', 'xpath=//html/body/div/div[1]/section[5]/div/div/div/div/div[4]/div/div[2]/a'];
        let location = '';
        let expectedURL = '';
        switch(string1){
            case "first":
                location = readMoreArray[0];
                expectedURL = string2;
                break;
            case "second":
                location = readMoreArray[1];
                expectedURL = string2;
                break;
            case "third":
                location = readMoreArray[2];
                expectedURL = string2;
                break;
            case "fourth":
                location = readMoreArray[3];
                expectedURL = string2;
                break;  
        }

        let redirected = false;

        page.on('popup', async (newPage) => {
            if (newPage.url().includes(expectedURL)) {
                redirected = true;
                await newPage.close(); // Close the new tab
            }
        });

        await page.locator(location).click();
        await page.waitForTimeout(6000); 
        
        expect(redirected).toBe(true); 

    }

//     async scrollDownThePage(){
//         await page.$eval(this.stroies45kplusdiv, (element) => {
//             element.scrollIntoView();
//         });

//         await page.waitForSelector(this.stroies45kplusText);

//         console.log(`Checking if the element with selector ${this.stroies45kplusdiv} is present.`);
// await page.waitForSelector(this.stroies45kplusdiv);
// console.log(`Element found. Scrolling into view.`);
// await page.$eval(this.stroies45kplusdiv, (element) => {
//     element.scrollIntoView();
// });


//         // const content = await page.$eval(this.stroies45kplusText, (element) => {
//         //     return element.textContent;
//         //   });
        
//         //   expect(content).toContain('45k+ Happy Drives stories');

//         // await page.waitForSelector(this.hapyCustomerTile, { state: 'visible' });
//         // const listItems = await page.$$(this.hapyCustomerTile);

        

//     }

// async scrollDownThePage() {
//     console.log(`Checking if the element with selector ${this.pageSelector} is present.`);
//     await page.waitForSelector(this.pageSelector); //total page view , use xpath..

//     console.log(`Element found. Scrolling into view.`);
//     await page.$eval(this.pageSelector, (element) => {
//         element.scrollIntoView();
//     });

//     await page.waitForTimeout(6000);
// }


async scrollDownToStroies45k() {
    // const stroies45kplusSelector = 'xpath=//html/body/div/div[1]/section[4]/div';
    const stroies45kplusSelector = 'xpath=//html/body/div/div[1]/section[4]';
    const stroies45kplusHeadingSelector = 'xpath=//html/body/div/div[1]/section[4]/div/div/h2';
    const stroies45kplusList = ['xpath=//html/body/div/div[1]/section[4]/div/div/div/div/div/div/div/div[1]/div', 'xpath=//html/body/div/div[1]/section[4]/div/div/div/div/div/div/div/div[2]/div', 'xpath=//html/body/div/div[1]/section[4]/div/div/div/div/div/div/div/div[3]/div']
await page.$eval(stroies45kplusSelector, (element) => {
    element.scrollIntoView();
});

await page.waitForSelector(stroies45kplusHeadingSelector);

const content = await page.$eval(stroies45kplusHeadingSelector, (element) => {
    return element.textContent;
});

expect(content).toContain('45k+ Happy Drives stories');

const divCount = await page.$$eval(`${stroies45kplusSelector}/div`, (divs) => divs.length);

for (let i = 1; i <= divCount; i++) {
    const div = await page.$(`${stroies45kplusSelector}/div[${i}]`);

    expect(div).toBeDefined(); 
    const textContent = await div.textContent();
    // console.log(textContent);

    expect(textContent).toContain('');
}

}

    async stories45Text(){
        await page.locator(this.stroies45kplus);
        await page.waitForTimeout(6000);

    }

    async clicksOnTheRightArrow(){
        await page.locator('xpath=/html/body/div/div[1]/section[4]/div/div/div/div/div/div/button[2]').click();
        await page.waitForLoadState();
        await page.waitForTimeout(3000);
    }

    async clicksOnTheLeftArrow(){
        await page.locator('xpath=/html/body/div/div[1]/section[4]/div/div/div/div/div/div/button[1]').click();
        await page.waitForLoadState();
        await page.waitForTimeout(3000);

    }

    async verifyCarnameCustomernameOnStroies45() {
        const divCount = await page.$$eval(`${this.stroies45kplusSelector} > div`, (divs) => divs.length);
    
        for (let i = 1; i <= divCount; i++) {
            const div = await page.$(`${this.stroies45kplusSelector} > div:nth-child(${i})`);
    
            expect(div).toBeDefined();
            const textContent = await div.textContent();
            console.log(textContent);
    
            expect(textContent).toContain('');
        }
    }  
    
    async scrollDownToRecentlyViewedCars() {
        const RecentlyViwedCarsSelector = 'xpath=//html/body/div/div[1]/div[2]/div[4]';
        const RecentlyViwedCarsHeadingSelector = 'xpath=//html/body/div/div[1]/div[2]/div[4]/h2';
    
        await page.waitForSelector(RecentlyViwedCarsSelector);
        await page.waitForSelector(RecentlyViwedCarsHeadingSelector);
    
        const content = await page.$eval(RecentlyViwedCarsHeadingSelector, (element) => {
            return element.textContent;
        });
    
        expect(content).toContain('Recently Viewed Cars');
    
        const divCount = await page.$$eval(`${RecentlyViwedCarsSelector} section > div`, (divs) => divs.length);
    
        for (let i = 1; i <= divCount; i++) {
            const div = await page.$(`${RecentlyViwedCarsSelector} section > div:nth-child(${i})`);
    
            expect(div).toBeDefined(); 
            const textContent = await div.textContent();
            // console.log(textContent);
    
            expect(textContent).toContain('');
        }
    }
    

}

module.exports = { HomePage };
  
   