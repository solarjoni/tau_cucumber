import { When } from '@wdio/cucumber-framework';
import search from "../../support/actions/search";
import selectMenuOption from "../../support/actions/selectMenuOption";

When(/^the user searches for "(.*)"$/, async (keyword) => {
    await search(keyword);
});

When(/^the user clicks on the "(.*)" menu option in the menu$/, async (option) => {
    await selectMenuOption(option);
});