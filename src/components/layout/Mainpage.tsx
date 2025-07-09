import UpcomingList from "../common/UpcomingList";

interface Props {
  userName: string;
  onLogout: () => void;
}

const MainPage = () => {
  return (
    <div className="main-container">
      <UpcomingList />
    </div>
  );
};

export default MainPage;
