/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { IntonationGraph } from './IntonationGraph';
import { Icon } from '../atoms/Icon';

interface IProps {
  level: number; //1〜10（画像パスに使用）
  levelText: string;
  point: number;
}

export const IntonationResult: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssText = css`
    color: ${theme.color.primary0};
  `;
  const cssWrapper = css`
    /* color: ${theme.color.primary0}; */
    padding: 24px 21px 30px;
    border-radius: 14px;
    background-color: #fff;
  `;
  const cssTitle = css`
    font-size: 14px;
    line-height: 1.33;
    text-align: center;
    color: ${theme.color.text1};
    margin-bottom: 14px;
    margin-top: 0;
  `;
  const cssButtonArea = css`
    display: flex;
    justify-content: space-between;
  `;
  const cssButton = (type: string) => css`
    ${type === 'model' && `background-color: ${theme.color.primary0}`};
    ${type === 'you' && `background-color: ${theme.color.primary3}`};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    width: 110px;
    padding: 8px 16px;
    border-radius: 8px;
    gap: 8px;
    font-size: 14px;
    margin-top: 24px;
  `;

  const cssScoreArea = css`
    border-bottom: 1px solid ${theme.color.text1};
    padding-bottom: 21px;
    margin-top: 64px;
  `;
  const cssScoreTitle = css`
    border-top: 1px solid ${theme.color.text1};
    font-size: 16px;
    line-height: 1.25;
    padding: 8px 0;
    margin: 0;
    text-align: center;
    border-bottom: 1px solid ${theme.color.text1};
  `;
  const cssScoreLevel = css`
    margin-top: 24px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  `;

  const cssScorePoints = css`
    font-size: 16px;
    margin-top: 12px;
    text-align: center;
    color: ${theme.color.secondary1};
    span {
      font-size: 14px;
    }
  `;

  return (
    <div css={cssWrapper}>
      <h3 css={cssTitle}>Intonation Graph</h3>
      <div>
        <IntonationGraph />
      </div>
      <div css={cssButtonArea}>
        <button css={cssButton('model')}>
          <span>model</span>
          <Icon name={'volume'} width={22} height={22} />
        </button>
        <button css={cssButton('you')}>
          <span>you</span>
          <Icon name={'volume'} width={22} height={22} />
        </button>
      </div>
      <div css={cssScoreArea}>
        <h3 css={cssScoreTitle}>Score</h3>
        <div css={cssScoreLevel}>
          <Icon name={`level_${props.level}`} width={22} height={22} />
          <span>{props.levelText} Level</span>
        </div>
        <div css={cssScorePoints}>
          {props.point} <span>points</span>
        </div>
      </div>
    </div>
  );
};
