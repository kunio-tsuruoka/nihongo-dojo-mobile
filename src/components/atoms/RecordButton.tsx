/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css, useTheme } from '@emotion/react';
import { Icon } from './Icon';

export const RecordButton: React.FC = () => {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const record = () => {
    if (isPlaying == false) {
      // 音声の録音処理
      setIsPlaying(true);
    } else {
      // 録音停止処理
      // 録音をどこかに投げる？
      setIsPlaying(false);
    }
  };

  const cssButton = (playing: boolean) => css`
    @keyframes expansionBefore {
      50% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes expansionAfter {
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    width: 80px;
    height: 80px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    padding: 0;
    span {
      position: relative;
      z-index: 3;
    }
    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: RGBA(255, 255, 255, 30%);
      opacity: 0;
    }
    &::before {
      width: 106px;
      height: 106px;
      z-index: 2;
    }
    &::after {
      width: 132px;
      height: 132px;
      z-index: 1;
    }
    ${playing === true &&
    `
    &::before {
      animation-name: expansionBefore;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
    &::after {
      animation-name: expansionAfter;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
      
    `}
  `;
  const cssWrapper = css`
    width: 132px;
    height: 132px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  `;
  return (
    <div css={cssWrapper}>
      <button onClick={() => record()} css={cssButton(isPlaying)}>
        <Icon name="microphone" width={54} height={54} />
      </button>
    </div>
  );
};
