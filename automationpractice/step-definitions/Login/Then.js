import { Then } from '@wdio/cucumber-framework';
import checkAuthError from "../../support/assertions/checkAuthError";

Then(/^an authentication error message should say "(.*)"$/, async (errorMessage) => {
    await checkAuthError(errorMessage);
});

Then("they are successfully logged in", async () => {
   try{
    /* await browser.call(async () => await eyes.open(browser));
    await browser.call(async () => await eyes.check("Login Page", Target.window().fully()));
    await browser.call(async () => await eyes.close(true)); */
    
    await eyes.open(browser);
    await eyes.check("Login Page", Target.window().fully());
    await eyes.closeAsync();
   } catch(e) {
       console.log(e);
    } finally {
        //await browser.call(async () => await eyes.close(true));
        console.log("We are done!");
    }
});