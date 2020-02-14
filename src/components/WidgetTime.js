import React, {useState, useEffect } from 'react';
import moment from 'moment';

function WidgetTime() {
  const [hour, setHour] = useState(new Date());
  const date = moment();

  useEffect(() => {
    const timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setHour(new Date());
  }
  return (
    <div>
      <h3 className="header__title">{date.format("dddd MMM Do, YYYY")} {hour.toLocaleTimeString()}.</h3>
    </div>
  );
    
}

export default WidgetTime;