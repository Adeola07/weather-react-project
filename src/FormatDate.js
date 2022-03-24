import React from "react";

export default function FormatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    return `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    return `0${minutes}`;
  }
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
