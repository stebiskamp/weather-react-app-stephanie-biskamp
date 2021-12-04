export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let months = [
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentDay = days[props.date.getDay()];
  let currentDate = props.date.getDate();
  let currentMonth = months[props.date.getMonth()];
  let currentYear = props.date.getFullYear();
  let currentHour = props.date.getHours();
  let currentMinute = props.date.getMinutes();

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }
  return (
    <div>
      {currentDay}, {currentDate} {currentMonth} {currentYear} / {currentHour}:
      {currentMinute}h{" "}
    </div>
  );
}
