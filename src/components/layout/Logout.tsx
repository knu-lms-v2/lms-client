import { useNavigate } from "react-router-dom";
import { API_URL } from "../../globals";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    const response = await fetch(`${API_URL}/api/logout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.getItem("token") }),
    });

    if (response.ok) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default Logout;
