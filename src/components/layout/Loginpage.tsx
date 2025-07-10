import React, { useState } from "react";
import styles from "./Loginpage.module.css";
import { API_URL } from "../../globals";

interface Props {
  onLoginSuccess: (userName: string) => void;
}

const LoginPage: React.FC<Props> = ({ onLoginSuccess }) => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const lmsUrl = "https://knulms.kongju.ac.kr/profile/settings";

  const openLMSInNewTab = () => {
    window.open(lmsUrl, "_blank");
  };

  const saveToken = async () => {
    if (!token.trim()) {
      setMessage("토큰을 입력해주세요.");
      return;
    }
    // 개발용 로그인 로직
    if (token.trim() == "test") {
      setMessage(`환영합니다, 개발자님!`);
      setToken("");
      localStorage.setItem("token", token.trim());
      localStorage.setItem("userName", "개발자");
      onLoginSuccess("개발자");
      return;
    }
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/api/users/validate-token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token.trim() }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`환영합니다, ${data.user_name}님!`);
        setToken("");
        localStorage.setItem("token", token.trim());
        localStorage.setItem("userName", data.user_name);

        // 부모 컴포넌트에 로그인 성공 알림
        onLoginSuccess(data.user_name);
      } else {
        const errorData = await response.json();
        setMessage(
          `저장 실패: ${errorData.message || "알 수 없는 오류가 발생했습니다."}`
        );
      }
    } catch (error) {
      console.error("토큰 저장 중 오류:", error);
      setMessage("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      saveToken();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>KNU-LMS-v2</div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h1 className={styles.cardTitle}>로그인</h1>

          <p className={styles.description}>
            LMS-v2에 로그인하기 위한 토큰 발행 페이지로 이동합니다.
            <br />
            "+ 새 액세스 토큰"을 눌러 토큰을 발급받은 후 해당 토큰으로
            로그인하세요.
          </p>

          <div className={styles.buttonContainer}>
            <button onClick={openLMSInNewTab} className={styles.button}>
              토큰 발행 페이지로 이동
            </button>
          </div>
        </div>
        <div className={styles.inputAndLoginButtonContainer}>
          <input
            className={styles.input}
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="토큰을 입력하세요"
            disabled={isLoading}
          />
          <button
            onClick={saveToken}
            className={`${styles.button} ${styles.loginButton}`}
            disabled={isLoading || !token.trim()}
          >
            {isLoading ? "저장 중..." : "로그인"}
          </button>
        </div>

        {message && (
          <div
            className={`${styles.message} ${
              message.includes("환영합니다") ? styles.success : styles.error
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
