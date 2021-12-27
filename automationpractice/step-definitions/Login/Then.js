import { Then } from '@wdio/cucumber-framework';
import checkAuthError from "../../support/assertions/checkAuthError";

Then(/^an authentication error message should say "(.*)"$/, async (errorMessage) => {
    await checkAuthError(errorMessage);
});