import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Box, colors, Typography } from "@mui/material";
import "../styles/calendar.css";


function CalendarComponent() {
    const [date, setDate] = useState(new Date());

    return (
        <Box className="calendar">
            <Calendar onChange={setDate} value={date} />
            <p>You selected {date.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
        </Box>
    );
}

export default CalendarComponent;