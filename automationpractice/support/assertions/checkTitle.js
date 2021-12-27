import assert from "assert";

/**
 * @param {boolean} title expected title
 */
export default async (title) => {
    if(await browser.getTitle() === "508 Resource Limit Is Reached") {
        console.log("Resource limit is reached, try again later.");
        await browser.reloadSession();
    } else {
    assert(
        await browser.getTitle() === title,
        `Title: ${await browser.getTitle()} not equal to ${title}`
    );
    }
};