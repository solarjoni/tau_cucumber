import { When } from '@wdio/cucumber-framework';
import signin from "../../support/actions/signin";

When(/^the user tries to use "(valid|invalid)" credentials, "(.*)" to login$/, async (valid, email) => {
    await signin(valid === "valid" ? true : false, email);
});
