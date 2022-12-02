import getCleanName from "./getCleanName";
 export const sorting = {
  category: (a, b) => {
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  },
  fileSize: (a, b) => a.filesize - b.filesize,
  date: (a, b) => a.timestamp - b.timestamp,
  name: (a, b) => {
    let name1 = getCleanName(a.image)
    let name2 = getCleanName(b.image)
    return ("" + name1).localeCompare(name2);
  },
};

export const sortingSwitch = (sortType, images) => {
  let sortedArray = [...images];

  switch (sortType) {
    case "name":
      sortedArray.sort(sorting.name);
      break;
    case "fileSize":
      sortedArray.sort(sorting.fileSize);
      break;
    case "category":
      sortedArray.sort(sorting.category);
      break;
    case "date":
      sortedArray.sort(sorting.date);
      break;
    default:
      sortedArray.sort(sorting.name)
      break;
  }
  return sortedArray
}