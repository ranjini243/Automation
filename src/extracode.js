
// async interiorButtonClick() {
//     let imagePage;
  
//     const [newPage] = await Promise.all([
//       context.waitForEvent('page'),
//       page.waitForTimeout(3000),
//       page.locator(this.cartTile).click(),
//       page.waitForTimeout(3000),
//       page.locator('xpath=//html/body/div/div[1]/div[2]/div/div/div[2]/div[3]/div/div/a[1]/div/div[1]').click(),   //clickonacartile
//       page.waitForTimeout(3000),
//     ]);
  
//     await newPage.waitForLoadState();
  
//     [imagePage] = await Promise.all([
//       newPage.waitForLoadState(),
//       newPage.locator(this.view360Btn).click(),
//     //   newPage.waitForLoadState(),  // Wait for the new page to load
//       page.waitForTimeout(3000),
//     ]);
  
//     // newPage.locator('xpath=/html/body/div/div/div[2]/div[2]/div[3]/button[2]').check();
//     // newPage.waitForTimeout(3000);
//     // newPage.locator('xpath=/html/body/div/div/div[2]/div[2]/div[3]/button[2]').click();
//     // newPage.waitForTimeout(3000);
//   }

  


// async interiorButtonClick(){
//     {
//         const [newPage] = await Promise.all([
//           context.waitForEvent('page'),
//           page.locator(this.cartTile).click(),
//         ]);
    //   UPDATED
//         await newPage.waitForLoadState();
//         await newPage.click(this.view360Btn);
//         await newPage.waitForTimeout(3000);
//   await newPage.waitForLoadState();
//   const [imagePage] = await Promise.all([
//     context.waitForEvent('page'),
//   ]);
//   await imagePage.locator.check(this.interiorButton);
//   await imagePage.locator(this.interiorButton).click();
// }


  // async clickOn360View() {
  //   await this.visibleText360View();
  //   const locator = await expect(page.locator(/*'xpath=//html/body/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]'*/this.view360Btn, { state: 'visible', timeout: 60000 })).toBeTruthy();
  //   try {                                             
  //     await page.click(locator);
  //     console.log('Click successful');
  //   } catch (error) {
  //     console.error('Error during click on 360 button:');
  //   }
  // }


// async interiorButtonClick() {
//   try {
//     await this.clickOnCarTile();
//     await page.waitForLoadState();
//     await page.locator(this.interiorButton).check();
//     await page.locator(this.interiorButton).click();

//   } catch (error) {
//     console.error('Error during interiorButtonClick:', error);
//   }
// }


// async exterior11VerifyCount(string)
//     {let selector='';
//       if(string==='EXTERIOR 11'){
//         selector=this.exterior11Img;
//     }else if (string === 'IMPERFECTIONS 24'){
//       selector=this.imperfections24Img;
//     }
//     console.log(selector);
//       const [newPage] = await Promise.all([
//         context.waitForEvent('page'),
//         page.locator(this.cartTile).click(),
//       ]);
    
//       await newPage.waitForLoadState();
//       await newPage.click('xpath=//html/body/div[1]/div[1]/div[2]/div[1]/div[2]/div/div/div/div[2]/div/div/div/img');
//       await newPage.waitForTimeout(3000);
//         const exteriorNum = await newPage.$eval(selector, (li) => li.textContent);
//         console.log(exteriorNum)
//         const newArr=exteriorNum.split(" ");
//         console.log(newArr);
//         const number=parseInt(newArr[2]);
//         console.log(typeof number);
//         console.log(number);
//         const numberTwo=parseInt(newArr[0]);
//         console.log(typeof numberTwo);
//         console.log(numberTwo);
//         expect(isNaN(number)).toBe(false);

//     }
// }


//////wroking interior buton
// async interiorButtonClick() {
//     let newPage;
//     let imagePage;

//     try {
//         // Open a new page
//         [newPage] = await Promise.all([
//             context.waitForEvent('page'),
//             page.locator(this.cartTile).click(),
//         ]);

//         // Wait for the new page to load
//         await newPage.waitForLoadState();

//         // Click on the view360Btn in the new page
//         await newPage.locator(this.view360Btn).click();

//         // Wait for the new page to load again
//         await newPage.waitForLoadState();

//         // Get all open pages in the context
//         const allPages = await context.pages();

//         // Find the imagePage among open pages
//         imagePage = allPages.find((p) => p !== newPage);

//         // Check if the imagePage is valid
//         if (!imagePage) {
//             console.error('Image page not found.');
//             return;
//         }

//         // Perform actions on the imagePage
//         // await imagePage.locator(this.interiorButton).check();
//         await imagePage.locator(this.interiorButton).click();
//         await page.waitForTimeout(3000);
//     } catch (error) {
//         console.error('Error during interiorButtonClick:', error);
//     } finally {
//         // Close the pages to avoid potential issues
//         if (newPage) {
//             await newPage.close();
//         }
//         if (imagePage) {
//             await imagePage.close();
//         }
//     }
// }

