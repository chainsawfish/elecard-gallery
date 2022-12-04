export const pushToStorage = (number) => {
    let arrayFromStorage = localStorage.length === 0 ? [] :
    localStorage.getItem("hidden").split(",").map((str) => Number.parseInt(str, 10))
    arrayFromStorage.push(number)
    localStorage.setItem("hidden", arrayFromStorage.join(","))
}