import styles from "./Calender.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

type CalenderProps = {
  className?: string;
};

const Calender = ({ className }: CalenderProps) => {
  const events = [
    { title: "event1", date: "2025-07-22" },
    { title: "event2", date: "2025-07-23" },
    { title: "event3", date: "2025-07-24" },
  ];

  return (
    <div className={`${styles.calenderContainer} ${className || ""}`}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
};

export default Calender;
