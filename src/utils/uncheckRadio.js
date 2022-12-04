// функция убирает все чеки на радио-кнопках
export const uncheckRadio = () => {
    const sortButtons = document.getElementsByName("sort")
    sortButtons.forEach((e) => e.checked = "" )
}
