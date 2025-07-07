import { useNavigate } from "react-router-dom";
import { API_URL } from "../../globals";

interface Props {
  onLogout: () => void;
}

const Logout: React.FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await fetch(`${API_URL}/api/logout/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: token }),
        });

        if (response.ok) {
          console.log("백엔드 로그아웃 성공");
          localStorage.removeItem("token");
          localStorage.removeItem("userName");
          onLogout();
          navigate("/login");
        } else {
          console.log("백엔드 로그아웃 실패:", response.status);
        }
      }
    } catch (error) {
      console.error("로그아웃 중 오류:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default Logout;
