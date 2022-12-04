export const localArray = () => {
    return localStorage.length === 0 ? [] :
        [localStorage.getItem("hidden").split(",")]
}