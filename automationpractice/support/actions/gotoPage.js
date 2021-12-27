import home from "../../pom/Home";
import login from "../../pom/Login";

export default async page => {
    switch (page) {
        case "Home":
            await browser.url(home.url);
            break;
        case "Login":
                await browser.url(login.url);
                break;
        default:
            console.log(`Invalid Page ${page}`);
    }
}