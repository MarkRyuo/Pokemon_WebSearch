import Navigo from "navigo";
import { Homepage } from "./main";


export const router = new Navigo("/");

router 
    .on("/", () => Homepage())
    .notFound(() => {
        document.querySelector("#app").innerHTML = "<h1>404 Page</h1>"
    })

document.addEventListener("DOMContentLoaded", () => {
    router.resolve();
})