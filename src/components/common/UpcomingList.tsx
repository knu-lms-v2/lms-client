import { useState, useEffect } from "react";
import { API_URL } from "../../globals";
import styles from "./UpcomingList.module.css";

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
  // const dummyItems = [
  //   {
  //     type: "assignment",
  //     title: "과제",
  //     week: 3,
  //     course_name: "웹프로그래밍",
  //     remaining_days: 3,
  //   },
  //   {
  //     type: "exam",
  //     title: "시험",
  //     week: 4,
  //     course_name: "데이터베이스",
  //     remaining_days: 8,
  //   },
  // ];

  // 1 . UpcomingList가 렌더링될 때 데이터를 가져옴
  // 2. 가져온 json을 map으로 순회하며 각 요소를 렌더링
  const [upcomingItems, setUpcomingItems] = useState<UpcomingItem[]>([]);
  const userName = localStorage.getItem("userName");

  const fetchData = async () => {
    const response = await fetch(
      `${API_URL}/api/upcoming-list/upcoming-events/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name: userName }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      setUpcomingItems(data.lecture_data);
      console.log(response.json());
    } else {
      console.log("백엔드 에러");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`${styles.container} ${className || ""}`}>
      <h2 className={styles.title}>Upcoming List</h2>
      {upcomingItems.map((item, index) => (
        <div key={index} className={styles.items}>
          [{item.course_name}] {item.week} {item.type} D-
          {item.remaining_days}
        </div>
      ))}
      {/* <div className="list">
        {dummyItems.map((item, index) => (
          <div key={index} className="item">
            [{item.course_name}] {item.week}주차 {item.type} D-{item.remaining_days}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default UpcomingList;
