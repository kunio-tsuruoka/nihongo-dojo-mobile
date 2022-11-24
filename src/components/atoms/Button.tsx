/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { MouseEventHandler, useCallback } from 'react';

interface IProps {
  src: string | null;
  label: string;
  isCenter?: boolean;
  type:
    | 'success'
    | 'successSub'
    | 'alert'
    | 'alertSub'
    | 'primary'
    | 'transparent';
  onClickHandler?: () => void;
  id?: string;
  tag?: React.ElementType;
}

export const Button: React.FC<IProps> = (props) => {
  const CostomTag = props.tag ? props.tag : 'a';
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
    ${type === 'primary' &&
    `
      background-color: #FFF;
      color: ${theme.color.primary0};
    `}
    ${type === 'transparent' &&
    `
      background-color: transparent;
      color: ${theme.color.text1};
    `}
    ${(isCenter == true || isCenter == null) &&
    `
      margin-left: auto;
      margin-right: auto;
    `}
  `;

  return (
    <CostomTag
      css={btn(props.type, props.isCenter)}
      onClick={handleClick}
      id={props.id ? props.id : ''}
      {...(props.src && { href: props.src })}
    >
      {props.label}
    </CostomTag>
  );
};
