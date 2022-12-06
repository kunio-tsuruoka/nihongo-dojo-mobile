/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { NONAME } from 'dns';
Chart.register(CategoryScale);

interface IProps {
  text?: string;
}

export const RecordGraph: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssText = css`
    color: ${theme.color.primary0};
  `;
  const cssWrapper = css`
    /*  */
  `;
  const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: 'model',
        data: [3, 10, 30, 100, 56, 55, 60],
        backgroundColor: [
          'rgb(245, 159, 0)',
          'rgb(245, 159, 0)',
          'rgb(245, 159, 0)',
          'rgb(245, 159, 0)',
          'rgb(245, 159, 0)',
          'rgb(245, 159, 0)',
          'rgb(245, 159, 0)',
        ],
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
        position: 'bottom',
      },
    },
  };
  return (
    <div css={cssWrapper}>
      <Bar
        height={202}
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
