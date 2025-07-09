import { useState, useEffect } from "react";
import { API_URL } from "../../globals";

interface UpcomingItem {
  type: string;
  title: string;
  course: string;
  week: number;
  due_at: string;
  remaining_days: number;
}

const UpcomingList = () => {
  // const dummyItems = [
  //   {
  //     type: "assignment",
  //     title: "과제",
  //     week: 3,
  //     course: "웹프로그래밍",
  //     due_at: "2024-01-15",
  //     remaining_days: 3,
  //   },
  //   {
  //     type: "exam",
  //     title: "시험",
  //     week: 4,
  //     course: "데이터베이스",
  //     due_at: "2024-01-20",
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
      setUpcomingItems(data);
    } else {
      console.log(response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Upcoming List</h2>
      {upcomingItems.map((item, index) => (
        <div key={index} className="item">
          [{item.course}] {item.week}주차 {item.title} D-{item.remaining_days}
        </div>
      ))}
      {/* <div className="list">
        {dummyItems.map((item, index) => (
          <div key={index} className="item">
            [{item.course}] {item.week}주차 {item.title} D-{item.remaining_days}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default UpcomingList;
