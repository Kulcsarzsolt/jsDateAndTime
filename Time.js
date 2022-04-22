const dateAndTimeStringList = [
  "2022-04-21T11:23:59.663Z",
  "2022-04-21T11:43:05.913Z",
  "2022-04-21T14:41:53.624Z",
  "2022-04-21T20:54:53.210Z",
  "2022-04-21T20:59:20.149Z",
  "2022-04-21T21:05:44.132Z",
  "2022-04-21T21:06:18.010Z",
];

const getDateAndTime = (dateString) => {
  const d = new Date(dateString).toLocaleString();

  const [date, time] = d.split(", ");

  return { date, time };
};

dateAndTimeStringList.forEach((dateAndTimeString) => {
  console.log(getDateAndTime(dateAndTimeString));
});
