/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { MouseEventHandler, useCallback } from 'react';

interface IProps {
  src: string;
  label: string;
  isCenter?: boolean;
  type: 'success' | 'successSub' | 'alert' | 'alertSub' | 'primary';
  onClickHandler?: () => void;
}

export const Button: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (event) => {
      if (props.onClickHandler) {
        event.preventDefault();
        return props.onClickHandler();
      }
    },
    [props.onClickHandler],
  );

  const btn = (type: string, isCenter?: boolean) => css`
    color: #fff;
    display: block;
    width: 100%;
    max-width: 325px;
    padding: 16px;
    font-size: 16px;
    border-radius: 24px;
    text-align: center;
    text-decoration: none;
    ${type === 'success' &&
    `
      background-color: ${theme.color.primary0};
    `}
    ${type === 'successSub' &&
    `
      background-color: ${theme.color.primary1};
    `}
    ${type === 'alert' &&
    `
      background-color: ${theme.color.secondary0};
    `}
    ${type === 'alertSub' &&
    `
      background-color: #C17A7A;
    `}
    ${(isCenter == true || isCenter == null) &&
    `
      margin-left: auto;
      margin-right: auto;
    `}
  `;

  return (
    <a
      css={btn(props.type, props.isCenter)}
      onClick={handleClick}
      href={props.src}
    >
      {props.label}
    </a>
  );
};
