/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

interface IProps {
  name: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const Icon: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const icon = (cssWidth?: number, cssHeight?: number) => css`
    ${cssWidth ? `width: ${cssWidth}px` : `24px`};
    ${cssHeight ? `height: ${cssHeight}px` : `24px`};
    display: inline-block;
    vertical-align: bottom;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `;
  return (
    <span css={icon(props.width, props.height)}>
      <img
        src={`/assets/icon/staticicon/svg/${props.name}.svg`}
        alt={`${props.alt}`}
      />
    </span>
  );
};
