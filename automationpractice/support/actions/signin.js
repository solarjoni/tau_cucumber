import login from "../../pom/Login";
import credentials from "../../../data/credentials";

export default async (isValid, email) => {
    const password = await isValid
    ? credentials.find(creds => creds.email === email).password
    : "randomPassword";
    //const password = "abc";

    await login.signIn(email, password);
};