import React, { useState } from "react";
import styles from "./LMSWebView.module.css";

const LMSWebView: React.FC = () => {
  const [token, setToken] = useState("");
  const lmsUrl = "https://knulms.kongju.ac.kr/profile/settings";

  const openLMSInNewTab = () => {
    window.open(lmsUrl, "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>KNU-lms-v2</h1>

        <p className={styles.description}>
          LMS-v2에 접속하기 위한 토큰 발행 페이지로 이동합니다.
          <br /> 로그인 후 "+ 새 액세스 토큰" 버튼을 누르고 토큰을 발급받은 후
          <br />
          하단 토큰 입력란에 입력하세요.
        </p>

        <div className={styles.buttonContainer}>
          <button onClick={openLMSInNewTab} className={styles.button}>
            토큰 발행 페이지로 이동
          </button>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="토큰을 입력하세요"
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
};

export default LMSWebView;
