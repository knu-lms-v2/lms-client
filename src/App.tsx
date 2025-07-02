import React from 'react';
import Sidetab from './components/layout/Sidetab';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Sidetab />
      <main className="main-content">
        {/* 메인 콘텐츠가 이 곳에 표시됩니다. */}
        <h1>메인 콘텐츠 영역</h1>
        <p>페이지의 나머지 내용이 여기에 들어갑니다.</p>
      </main>
    </div>
  );
}

export default App;