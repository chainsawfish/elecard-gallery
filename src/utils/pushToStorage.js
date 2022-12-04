import {localArray} from "./localArray";
export const pushToStorage = (string) => {
    let arrayFromStorage = [...localArray()]
    arrayFromStorage.push(string)
    localStorage.setItem("hidden", arrayFromStorage.join(","))
}