/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

interface IProps {
  text: string;
}

export const Atom: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssText = css`
    color: ${theme.color.primary0};
  `;
  return <p css={cssText}>{props.text}</p>;
};
