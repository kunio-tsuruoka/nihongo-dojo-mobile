/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { rgba } from 'emotion-rgba';

import { ImageIcon } from '../atoms/ImageIcon';
import { RecordGraph } from './RecordGraph';
import { Icon } from '../atoms/Icon';

interface IProps {
  currentNumber: number;
  goalOfWeek: number;
  totalTime: {
    hour: number;
    min: number;
  };
  totalPhrases: number;
}

export const WeeklyRecord: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssWrapper = css`
    padding: 24px 21px 30px;
    border-radius: 14px;
    background-color: ${theme.color.bg1};
  `;
  const cssTitle = css`
    font-size: 20px;
    line-height: 1.4;
    text-align: center;
    color: ${theme.color.primary0};
  `;
  const cssRecordArea = css`
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: #fff;
    padding: 16px 32px;
    border-radius: 8px;
  `;
  const cssSlash = css`
    width: 1px;
    height: 28px;
    display: block;
    background-color: ${theme.color.text1};
    position: absolute;
    transform: rotate(15deg);
    bottom: 24px;
    left: 50%;
  `;
  const cssRecordNumber = (type: string) => css`
    ${type === 'current'
      ? `color: ${theme.color.secondary1};
      span {
        font-weight: 600;
      }
      `
      : `${theme.color.text1}`};
    font-weight: 400;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: 12px;
    .number {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
    }
    button {
      padding: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-left: 8px;
      box-shadow: 1px 2px 3px ${rgba(theme.color.text1, 0.15)};
    }
  `;
  const cssGraphArea = css`
    margin-top: 45px;
  `;
  const cssOverview = css`
    margin-top: 45px;
    padding: 24px 24px 41px;
    border-radius: 14px;
    background-color: ${rgba(theme.color.bg0, 0.3)};
  `;
  const cssOverviewTitle = css`
    margin: 0;
    color: #fff;
    text-align: center;
    font-size: 20px;
  `;
  const cssOverviewInner = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-top: 16px;
  `;

  const cssOverviewBox = css`
    padding: 12px 0;
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    text-align: center;
  `;
  const cssOverviewBoxTitle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    gap: 4px;
    color: ${theme.color.primary0};
    margin: 0;
  `;
  const cssOverviewBoxData = css`
    margin-top: 6px;
    margin-bottom: 0;
    font-size: 20px;
    span {
      font-size: 12px;
    }
  `;
  return (
    <div css={cssWrapper}>
      <h3 css={cssTitle}>Weekly Record</h3>
      <div css={cssRecordArea}>
        <div css={cssRecordNumber('current')}>
          <span>current number</span>
          <span className="number">{props.currentNumber}</span>
        </div>
        <span css={cssSlash}></span>
        <div css={cssRecordNumber('')}>
          <span>goal of the week</span>
          <span className="number">
            <span>{props.goalOfWeek}</span>
            <button>
              <ImageIcon name="edit" width={24} height={24} />
            </button>
          </span>
        </div>
      </div>
      <div css={cssGraphArea}>
        <RecordGraph dayOfWeek={5} />
      </div>
      <div css={cssOverview}>
        <h3 css={cssOverviewTitle}>Overview</h3>
        <div css={cssOverviewInner}>
          <div css={cssOverviewBox}>
            <h5 css={cssOverviewBoxTitle}>
              <Icon name={'time'} width={18} height={18} />
              <span>total time</span>
            </h5>
            <p css={cssOverviewBoxData}>
              {props.totalTime.hour}
              <span>H</span> {props.totalTime.min}
              <span>M</span>
            </p>
          </div>
          <div css={cssOverviewBox}>
            <h5 css={cssOverviewBoxTitle}>
              <Icon name={'generic'} width={16} height={16} />
              <span>total phrases</span>
            </h5>
            <p css={cssOverviewBoxData}>{props.totalPhrases}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
