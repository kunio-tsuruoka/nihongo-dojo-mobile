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
  // https://www.chartjs.org/docs/latest/samples/animations/progressive-line.html
  const totalDuration = 1500;
  const delayBetweenPoints = totalDuration / graphData.datasets[1].data.length;
  const previousY = (ctx: any) =>
    ctx.index === 0
      ? ctx.chart.scales.y.getPixelForValue(100)
      : ctx.chart
          .getDatasetMeta(ctx.datasetIndex)
          .data[ctx.index - 1].getProps(['y'], true).y;
  const animation = {
    x: {
      type: 'number',
      easing: 'linear',
      duration: delayBetweenPoints,
      from: NaN, // the point is initially skipped
      delay(ctx: any) {
        if (ctx.type !== 'data' || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
    y: {
      type: 'number',
      easing: 'linear',
      duration: delayBetweenPoints,
      from: previousY,
      delay(ctx: any) {
        if (ctx.type !== 'data' || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
  };

  const options = {
    animation,
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
        height={115}
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
