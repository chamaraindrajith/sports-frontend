import { React } from "react";
import Box from '@mui/material/Box';

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
        />
      </div>
      <div id="dates">
        <div className="date">
          <span>SAT</span>
          <span className="date_number">25 JUL</span>
        </div>
        <div className="date">
          <span>SAT</span>
          <span className="date_number">25 JUL</span>
        </div>
        <div className="date">
          <span style={{color: "#ff6b00"}}>TODAY</span>
          <span style={{color: "#ff6b00"}} className="date_number">25 JUL</span>
        </div>
        <div className="date">
          <span>SAT</span>
          <span className="date_number">25 JUL</span>
        </div>
        <div className="date">
          <span>SAT</span>
          <span className="date_number">25 JUL</span>
        </div>
      </div>
      <img
        src="https://api.tvpool.net/images/common/calendar.svg"
        style={{
          minHeight: "100%",
          width: "25px",
        }}
      />
      
    </div>
    </Box>
  );
}

export default Calender;
