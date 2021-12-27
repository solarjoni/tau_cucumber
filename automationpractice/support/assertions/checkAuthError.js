import login from "../../pom/Login";
import assert from "assert";

export default async (errorMessage) => {
    const authErrorMessage = await login.errorMessage.getText();

    assert(
        await authErrorMessage.includes(errorMessage),
        `Error message, ${authErrorMessage} did not match ${errorMessage}`
    )
}