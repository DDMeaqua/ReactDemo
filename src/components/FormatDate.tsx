import React from 'react'

const today = new Date();

function fd(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function FormatDate() {

  return (
    <h1>To Do List for {fd(today)}</h1>
  );
}
