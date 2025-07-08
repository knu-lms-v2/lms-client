interface UpcomingItem {
  type: string;
  title: string;
  course: string;
  due_at: string;
  remaining_days: number;
}

const UpcomingList = () => {
  const dummyItems = [
    {
      type: "assignment",
      title: "과제",
      week: 3,
      course: "웹프로그래밍",
      due_at: "2024-01-15",
      remaining_days: 3,
    },
    {
      type: "exam",
      title: "시험",
      week: 4,
      course: "데이터베이스",
      due_at: "2024-01-20",
      remaining_days: 8,
    },
  ];

  return (
    <div className="container">
      <h2>Upcoming List</h2>
      <div className="list">
        {dummyItems.map((item, index) => (
          <div key={index} className="item">
            [{item.course}] {item.week}주차 {item.title} D-{item.remaining_days}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingList;
