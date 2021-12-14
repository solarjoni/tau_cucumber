import assert from "assert";

/**
 * @param {boolean} title expected title
 */
export default async (title) => {
    assert(
        await browser.getTitle() === title,
        `Title: ${await browser.getTitle()} not equal to ${title}`
    );
};