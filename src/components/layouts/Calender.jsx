import { React } from "react";
import Box from '@mui/material/Box';
const date = new Date();

function Calender() {
  return (
    <Box sx={{ mt: 1.5, mb: 1.5 }}>
    <div id="match-rows_calendar">
      <div>
        <img
          src="https://api.tvpool.net/images/common/live.svg"
          style={{
            minHeight: "100%",
            width: "30px",
          }}
          alt="live"
        />
      </div>
      <div id="dates">
        <div className="date">
          <span>{dayHandler(-2)}</span>
          <span className="date_number">{dateHandler(-2)}</span>
        </div>
        <div className="date">
          <span>{dayHandler(-1)}</span>
          <span className="date_number">{dateHandler(-1)}</span>
        </div>
        <div className="date">
          <span style={{color: "#ff6b00"}}>TODAY</span>
          <span style={{color: "#ff6b00"}} className="date_number">{dateHandler(0)}</span>
        </div>
        <div className="date">
          <span>{dayHandler(1)}</span>
          <span className="date_number">{dateHandler(1)}</span>
        </div>
        <div className="date">
          <span>{dayHandler(2)}</span>
          <span className="date_number">{dateHandler(2)}</span>
        </div>
      </div>
      <img
        src="https://api.tvpool.net/images/common/calendar.svg"
        style={{
          minHeight: "100%",
          width: "25px",
        }}
        alt="calendar"
      />
      
    </div>
    </Box>
  );
}

function dateHandler(rewind) {
  let date = new Date();
  date.setDate(date.getDate() + rewind);

  return date.toUTCString().substring(5, 11).toUpperCase();
}

function dayHandler(rewind) {
  let date = new Date();
  date.setDate(date.getDate() + rewind);

  return date.toUTCString().substring(0, 3).toUpperCase();
}

export default Calender;
