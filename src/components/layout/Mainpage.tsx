import UpcomingList from "../common/UpcomingList";
import styles from "./MainPage.module.css";

interface Props {
  userName: string;
  onLogout: () => void;
}

const MainPage = () => {
  return (
    <div className="main-container">
      <UpcomingList className={styles.upcomingList} />
    </div>
  );
};

export default MainPage;
