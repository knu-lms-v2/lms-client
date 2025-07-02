import React from "react";

const LMSWebView: React.FC = () => {
  const lmsUrl = "https://knulms.kongju.ac.kr/profile/settings";

  const openLMSInNewTab = () => {
    window.open(lmsUrl, "_blank");
  };

  const openLMSInSameTab = () => {
    window.location.href = lmsUrl;
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
        <h1 style={{ color: "#333", marginBottom: "20px" }}>공주대학교 LMS</h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          LMS에 접속하려면 아래 버튼 중 하나를 선택하세요.
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
            새 탭에서 열기
          </button>

          <button
            onClick={openLMSInSameTab}
            style={{
              padding: "12px 24px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            현재 탭에서 열기
          </button>
        </div>

        <div
          style={{
            marginTop: "30px",
            padding: "15px",
            backgroundColor: "#e9ecef",
            borderRadius: "6px",
            fontSize: "14px",
            color: "#495057",
          }}
        >
          <strong>참고:</strong> LMS 보안 정책으로 인해 직접 임베딩이
          제한됩니다.
        </div>
      </div>
    </div>
  );
};

export default LMSWebView;
