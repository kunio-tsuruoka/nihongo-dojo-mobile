/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { ImageIcon } from '../atoms/ImageIcon';
import { RecordGraph } from './RecordGraph';

interface IProps {
  currentNumber: number;
  goalOfWeek: number;
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
      box-shadow: 1px 2px 3px rgba(#000, 0.15);
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
      <div>
        <RecordGraph />
      </div>
    </div>
  );
};
