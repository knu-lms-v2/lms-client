import UpcomingList from "../common/UpcomingList";
import Calender from "../common/Calender";
import LectureList from "../common/LectureList";
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
    </div>
  );
};

export default MainPage;
