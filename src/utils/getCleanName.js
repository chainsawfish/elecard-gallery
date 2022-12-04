// функция очищает имя от категории и расширения файла
 const getCleanName = (imageUrl) => {
    return imageUrl.split("/")
        .pop()
        .replace(/\.[^\/.]+$/, '') //убрать, если нужно оставить расширение файла
 }

 export default getCleanName;