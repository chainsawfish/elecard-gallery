
const getDate = (timeStamp) => {
  let d = new Date(timeStamp);
  let ye = new Intl.DateTimeFormat("ru", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("ru", { month: "numeric" }).format(d);
  let da = new Intl.DateTimeFormat("ru", { day: "2-digit" }).format(d);
  return `${da}.${mo}.${ye}`;
};

export default getDate;
