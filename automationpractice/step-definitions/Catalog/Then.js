import { Then } from "@wdio/cucumber-framework";
import checkNoResultsError from "../../support/assertions/checkNoResultsError";
import checkProductsContain from "../../support/assertions/checkProductsContain";
import { default as checkProducts } from "../../support/assertions/checkProducts";
import checkTitle from "../../support/assertions/checkTitle";

Then(/^(no )?products are listed$/, async (notListed) => {
    if(notListed) {
        await checkProducts(false);
    } else {
        await checkProducts(true);
    }
});

Then("a no results error message is shown", async () => {
    await checkNoResultsError();
});

Then(/^search results show products related to "(.*)"$/, async (keyword) => {
    await checkProductsContain(keyword);
});

Then(/^the title of the page should be "(.*)"$/, async (title) => {
    await checkTitle(title);
});