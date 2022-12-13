/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const DialogueTextArea: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssWrapper = css`
    color: ${theme.color.primary0};
    background-color: ${theme.color.bg0};
    padding: 20px 16px 40px;
    h3 {
      font-weight: bold;
      font-size: 16px;
      margin-top: 0;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
      line-height: 1.5;
      margin: 16px 0 0;
    }
    section {
      margin: 24px 0;
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    dl {
      div {
        display: flex;
        align-items: flex-start;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      dd,
      dt {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
      }
      dt {
        flex-shrink: 0;
        &::after {
          content: '：';
        }
      }
      p {
        margin: 0;
      }
    }
  `;
  return <div css={cssWrapper}>{props.children}</div>;
};
