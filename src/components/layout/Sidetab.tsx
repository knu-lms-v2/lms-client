import React from 'react';
import './Sidetab.css'; // Sidetab 전용 CSS 파일을 만듭니다.

const Sidetab = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="/">대시보드</a></li>
          <li><a href="/courses">강의 목록</a></li>
          <li><a href="/profile">프로필</a></li>
          <li><a href="/settings">설정</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidetab;