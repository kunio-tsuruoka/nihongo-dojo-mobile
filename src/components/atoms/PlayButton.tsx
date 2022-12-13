/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { MouseEventHandler, useCallback } from 'react';
import { Icon } from '../atoms/Icon';

interface IProps {
  type: 'play' | 'pause' | 'replay';
  onClickHandler?: () => void;
  id?: string;
}

export const PlayButton: React.FC<IProps> = (props) => {
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

  const cssBtn = css`
    color: #fff;
    display: block;
    width: 100%;
    max-width: 325px;
    padding: 12px;
    font-size: 16px;
    border-radius: 14px;
    text-align: center;
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;
  `;
  const cssInner = css`
    width: 48px;
  `;

  const thumbName = () => {
    if (props.type === 'play') {
      return 'play';
    } else if (props.type === 'pause') {
      return 'pause';
    } else if (props.type === 'replay') {
      return 'replay';
    } else {
      return 'play';
    }
  };

  return (
    <button css={cssBtn} onClick={() => handleClick}>
      <span css={cssInner}>
        <Icon name={thumbName()} alt={thumbName()} width={48} height={48} />
      </span>
    </button>
  );
};
