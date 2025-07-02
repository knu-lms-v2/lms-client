import React, { useState } from "react";

const LMSWebView: React.FC = () => {
  const [token, setToken] = useState("");
  const lmsUrl = "https://knulms.kongju.ac.kr/profile/settings";

  const openLMSInNewTab = () => {
    window.open(lmsUrl, "_blank");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          maxWidth: "500px",
        }}
      >
        <h1 style={{ color: "#333", marginBottom: "20px" }}>KNU-lms-v2</h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          LMS-v2에 접속하기 위한 토큰 발행 페이지로 이동합니다.
          <br /> 로그인 후 "+ 새 액세스 토큰" 버튼을 누르고 토큰을 발급받은 후
          <br />
          하단 토큰 입력란에 입력하세요.
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <button
            onClick={openLMSInNewTab}
            style={{
              padding: "12px 24px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            토큰 발행 페이지로 이동
          </button>
        </div>
        <div style={{ marginBottom: "30px", width: "100%" }}>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="토큰을 입력하세요"
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "12px 16px",
              fontSize: "16px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LMSWebView;
