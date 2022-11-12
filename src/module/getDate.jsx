// можно было сделать проще, но stackoverflow не прикажешь :D
const getDate = (timeStamp) => {
  let d = new Date(timeStamp);
  let ye = new Intl.DateTimeFormat("ru", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("ru", { month: "short" }).format(d);
  let da = new Intl.DateTimeFormat("ru", { day: "2-digit" }).format(d);
  return `${da}-${mo}-${ye}`;
};

export default getDate;
