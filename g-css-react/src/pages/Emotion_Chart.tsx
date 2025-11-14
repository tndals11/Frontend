import React from 'react'

//! React에서 자주 쓰이는 Chart(그래프, 표) 라이브러리
//? Chart.js (react-chartjs-2)
// : Canvas 기반 (고성능 픽셀 렌더링)
// - 애니메이션, 플러그인, 이미지 내보내기 가능

//? Recharts
// : SVG 기반 (React 컴포넌트 스타일)
// 장점) React의 관점과 비슷한 선언적 API를 사용
//      + ResponsiveContainer로 반응형 처리 용이

//# 설치 
// 1) Char.js (+ React wrapper)
// npm install chart.js react-chartjs-2

// cf) Chart.js의 타입 헬퍼(선택)
//      : npm install -D @types/chart.js

// 2) Recharts
// npm install recharts

// [ + emotion 설치 명령어]
// npm install @emotion/react @emotion/styled


function Emotion_Chart() {
  return (
    <div>Emotion_Chart</div>
  )
}

export default Emotion_Chart