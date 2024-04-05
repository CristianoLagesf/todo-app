export function handleDate() {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  function add0(a) {
    if (a < 10) return `0${a}`;
    else return a;
  }
  const time = new Date();
  const timeStamp = {
    week: week[time.getDay()],
    day: add0(time.getDay()),
    month: add0(time.getMonth()),
    year: time.getFullYear(),
    hour: time.getHours(),
    mm: add0(time.getMinutes()),
  };
  const dateReturn = `${timeStamp.week} ${timeStamp.day}/${timeStamp.month}/${timeStamp.year} ${timeStamp.hour}:${timeStamp.mm}`;
  return dateReturn;
}
