
 const getCleanName = (imageUrl) => {
    return imageUrl.split("/")
        .pop()
        .replace(/\.[^\/.]+$/, '')

 }

 export default getCleanName;