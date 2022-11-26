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
    let name1 = getCleanName(a.image.split("/").pop())
    let name2 = getCleanName(b.image.split("/").pop())
    return ("" + name1).localeCompare(name2);
  },
};
