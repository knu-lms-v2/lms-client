import UpcomingList from "../common/UpcomingList";
import Calender from "../common/Calender";
import LectureList from "../common/LectureList";
import Something from "../common/Something";
import styles from "./MainPage.module.css";

interface Props {
  userName: string;
  onLogout: () => void;
}

const MainPage = () => {
  return (
    <div className={styles.mainContainer}>
      <UpcomingList className={styles.upcomingList} />
      <Calender className={styles.calender} />
      <LectureList className={styles.lectureList} />
      <Something className={styles.something} />
    </div>
  );
};

export default MainPage;
