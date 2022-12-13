/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Icon } from '../atoms/Icon';

interface IProps {
  textYomikana: string;
  textJa: string;
  textEn: string;
}

export const DialogueTitle: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssWrapper = css`
    padding: 16px;
    background-color: ${theme.color.primary0};
    display: flex;
    align-items: center;
  `;
  const cssText = css`
    margin-right: 12px;
  `;
  const cssTextYomikana = css`
    color: #fff;
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    font-weight: normal;
    letter-spacing: 0.2em;
  `;
  const cssTextJa = css`
    color: #fff;
    margin: 0;
    margin-top: 2px;
    font-size: 20px;
    line-height: 1.4;
    font-weight: bold;
  `;
  const cssTextEn = css`
    color: #fff;
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    margin-top: 2px;
    font-weight: bold;
  `;
  const cssIcon = css``;
  return (
    <div css={cssWrapper}>
      <div css={cssText}>
        <p css={cssTextYomikana}>{props.textYomikana}</p>
        <p css={cssTextJa}>{props.textJa}</p>
        <p css={cssTextEn}>{props.textEn}</p>
      </div>
      <div css={cssIcon}>
        <Icon name="play_small" width={24} height={24} />
      </div>
    </div>
  );
};
