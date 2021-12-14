import home from "../../pom/Home"

export default async option => {
    await home.selectMenuOption(option);
}