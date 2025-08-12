import { useState, useEffect } from "react";
import styles from "./UpcomingList.module.css";
import { useTasks } from "../../contexts/TaskProvider";

type UpcomingListProps = {
  className?: string;
};

interface UpcomingItem {
  type: string;
  course_name: string;
  week: string;
  remaining_days: string;
}

const UpcomingList = ({ className }: UpcomingListProps) => {
  const {tasks, loading, error, refreshTasks} = useTasks();

  const dummyItems = [
    {
      type: "assignment",
      title: "과제",
      week: 3,
      course_name: "웹프로그래밍",
      remaining_days: 3,
    },
    {
      type: "exam",
      title: "시험",
      week: 4,
      course_name: "데이터베이스",
      remaining_days: 8,
    },
    {
      type: "exam",
      title: "시험",
      week: 4,
      course_name: "데이터베이스",
      remaining_days: 8,
    },
    {
      type: "exam",
      title: "시험",
      week: 4,
      course_name: "데이터베이스",
      remaining_days: 8,
    },
    {
      type: "exam",
      title: "시험",
      week: 4,
      course_name: "데이터베이스",
      remaining_days: 8,
    },
    {
      type: "exam",
      title: "시험",
      week: 4,
      course_name: "데이터베이스",
      remaining_days: 8,
    },
  ];

  const [upcomingItems, setUpcomingItems] = useState<UpcomingItem[]>([]);
  const userName = localStorage.getItem("userName");

  return (
    <div className={`${styles.upcomingContainer} ${className || ""}`}>
      <h2 className={styles.title}>⏰ 다가오는 일정</h2>
      <div className={styles.itemsContainer}>
        {loading ? (
          <div className={styles.loadingMessage}>로딩 중...</div>
        ) : tasks.length > 0 ? (
          tasks.map((item, index) => (
            <div key={index} className={styles.item}>
              [{item.course_name}] {item.week}주차 {item.type} D-
              {item.remaining_days}
            </div>
          ))
        ) : (
          <div className={styles.noItemsMessage}>예정된 일정이 없습니다.</div>
        )}
      </div>
      {/* <h2 className={styles.title}>⏰ 다가오는 일정</h2>
      <div className={styles.itemsContainer}>
        {dummyItems.map((item, index) => (
          <div key={index} className={styles.item}>
            [{item.course_name}] {item.week}주차 {item.type} D-
            {item.remaining_days}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default UpcomingList;
