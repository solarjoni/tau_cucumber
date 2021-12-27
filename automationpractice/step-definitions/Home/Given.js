import { Given } from '@wdio/cucumber-framework';
import { default as gotoPage } from "../../support/actions/gotoPage";


Given(/^the browser is at the "(Home|Login)" page$/, async (page) => {
    await gotoPage(page);
}); 