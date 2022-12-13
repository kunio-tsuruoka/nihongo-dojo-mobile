/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { NONAME } from 'dns';
Chart.register(CategoryScale);

interface IProps {
  text?: string;
  dayOfWeek: number; // Mon:1〜Sun:7
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
        data: [3, 10, 30, 100, 250, 55, 60],
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
  const roundUpMultiple = (value: number, multiple: number) => {
    return Math.ceil(value / multiple) * multiple;
  };
  // scales y stepSize
  const quarterOfMaxData = roundUpMultiple(
    Math.max(...graphData.datasets[0].data) / 4,
    50,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        font: {
          size: 14,
        },
      },
    },
    scales: {
      y: {
        position: 'right',
        ticks: {
          stepSize: quarterOfMaxData,
        },
      },
      x: {
        position: 'bottom',
        grid: {
          display: false,
        },
        ticks: {
          lineWidth: 0,
          color: [
            'rgb(52, 58, 64)',
            'rgb(52, 58, 64)',
            'rgb(52, 58, 64)',
            'rgb(52, 58, 64)',
            'rgb(52, 58, 64)',
            'rgb(52, 58, 64)',
            'rgb(52, 58, 64)',
          ],
        },
      },
    },
  };
  // Change Today color
  options.scales.x.ticks.color.splice(
    props.dayOfWeek - 1,
    1,
    'rgb(245, 159, 0)',
  );
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
