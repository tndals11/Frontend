import styled from "@emotion/styled";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Chart.js 요소 등록
ChartJS.register(
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale
);

//! mock data
const data = {
  labels: ["월", "화", "수", "목", "금", "토", "일"],
  datasets: [
    {
      label: "매출",
      data: [120, 200, 150, 300, 250, 320, 290],
      fill: true,
      tension: 0.3,
      borderWidth: 2,
      pointRadius: 3,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

//! chart 옵션
// >> 반응형, 차트의 가로: 세로 비율 유지, 범례 표시, 축 설정
const options = {
  responsive: true,
  // 유지 + 측면 + 비율
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { mode: "index" as "index", intersect: false },
  },
};

//! 차트를 포함할 컴포넌트
export const ChartWrapper = styled.div`
  height: clamp(160px, 32vh, 320px);
  width: 100%;
`;

function SalesChartCharJS() {
  return (
    <ChartWrapper>
      <Line data={data} options={options} />
    </ChartWrapper>
  );
}

export default SalesChartCharJS;
