/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Icon } from '../atoms/Icon';

interface IProps {
  textJa: string;
  textEn: string;
  isDone: boolean;
  href: string;
}

export const DialogueItem: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssWrapper = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px 6px;
    background-color: #fff;
    border-radius: 8px;
    text-decoration: none;
  `;
  const cssText = css``;
  const cssIcon = css`
    flex: 0 0 24px;
    margin-left: 16px;
  `;
  const cssTextJa = css`
    color: ${theme.color.text1};
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    font-weight: bold;
  `;
  const cssTextEn = css`
    color: ${theme.color.text2};
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    margin-top: 2px;
    font-weight: bold;
  `;
  return (
    <a href={props.href} css={cssWrapper}>
      <div css={cssText}>
        <p css={cssTextJa}>{props.textJa}</p>
        <p css={cssTextEn}>{props.textEn}</p>
      </div>
      <div css={cssIcon}>
        {props.isDone ? (
          <Icon name="checked" width={24} height={24} />
        ) : (
          <Icon name="nextPage" width={24} height={24} />
        )}
      </div>
    </a>
  );
};
