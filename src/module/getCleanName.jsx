
 const getCleanName = (imageUrl) => {
    return imageUrl.split("/")
        .pop()
        .replace(/[-_.,0-9]/g, "")
        .replace("jpg", "")
}

 export default getCleanName;