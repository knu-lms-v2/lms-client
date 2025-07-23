import styles from "./Calender.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

type CalenderProps = {
  className?: string;
};

// 백엔드 서버에 한달 간의 일정을 POST로 요청
// 요청의 응답으로 받은 json 데이터를 type에 따라 분류
// 분류한 데이터를 FullCalendar에 전달하여 렌더링



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
