/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { NONAME } from 'dns';
Chart.register(CategoryScale);

interface IProps {
  text?: string;
}

export const IntonationGraph: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssText = css`
    color: ${theme.color.primary0};
  `;
  const cssWrapper = css`
    /*  */
  `;
  const labels = ['a', 'na', 'ta', 'no', 'ha', 'tsu', 'o', 'n'];
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: 'model',
        data: [65, 59, 60, 81, 56, 55, 60, 70],
        borderColor: 'rgb(18, 184, 134)',
      },
      {
        label: 'you',
        data: [60, 55, 57, 61, 75, 50, 70, 80],
        borderColor: 'rgb(174, 62, 201)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        ticks: {
          display: false,
        },
      },
      x: {
        position: 'top',
      },
    },
  };
  return (
    <div css={cssWrapper}>
      <Line
        height={300}
        width={300}
        data={graphData}
        // x.positionの型エラー回避のため
        // eslint-disable-next-line
        // @ts-ignore
        options={options}
        id="chart-key"
      />
    </div>
  );
};
