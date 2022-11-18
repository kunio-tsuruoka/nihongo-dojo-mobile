/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

interface IProps {
  name: string;
  width?: number;
  height?: number;
  extension?: string;
  alt?: string;
}

export const ImageIcon: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const icon = (cssWidth?: number, cssHeight?: number) => css`
    ${cssWidth ? `width: ${cssWidth}px` : `24px`};
    ${cssHeight ? `height: ${cssHeight}px` : `24px`};
    display: inline-block;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `;
  const extention = props.extension ? props.extension : 'png';
  return (
    <span css={icon(props.width, props.height)}>
      <img
        src={`/assets/icon/staticicon/img/${props.name}.${extention}`}
        alt={props.alt}
      />
    </span>
  );
};
