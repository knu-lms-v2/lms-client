import styles from "./Calender.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

type CalenderProps = {
  className?: string;
};

const Calender = ({ className }: CalenderProps) => {
  return (
    <div className={`${styles.calenderContainer} ${className || ""}`}>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
};

export default Calender;
