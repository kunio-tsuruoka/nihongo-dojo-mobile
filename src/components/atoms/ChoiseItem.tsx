/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import { ImageIcon } from '../atoms/ImageIcon';

interface IProps {
  text: string;
  icon: string;
  isWrong?: boolean;
}

export const ChoiseItem: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssWrapper = (iwWrong: boolean | undefined) => css`
    display: flex;
    background-color: #fff;
    border-radius: 10px;
    align-items: center;
    border: 2px solid #fff;
    width: 100%;
    padding: 9px 12px;
    ${iwWrong &&
    `
      border-color: ${theme.color.secondary0};
      background-color: ${theme.color.bg2};
    `}
  `;
  const cssIcon = css`
    margin-right: 8px;
  `;
  const cssText = css`
    color: ${theme.color.text1};
    margin: 0;
    margin-top: 2px;
    font-size: 16px;
    text-align: left;
    line-height: 1.35;
    font-weight: 600;
    p {
      margin: 0;
    }
  `;
  return (
    <div css={cssWrapper(props.isWrong)} className={'choiseItem__wrapper'}>
      <div css={cssIcon}>
        <ImageIcon name={props.icon} width={32} height={32} />
      </div>
      <div css={cssText}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
