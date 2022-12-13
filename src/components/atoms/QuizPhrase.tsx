/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Icon } from '../atoms/Icon';

interface IProps {
  text: string;
}

export const QuizPhrase: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const voicePlay = () => {
    // TODO：音声再生
  };
  const cssText = css`
    font-size: 16px;
    color: #fff;
    line-height: 1.5;
    display: block;
    margin: 0;
    font-weight: bold;
    margin-right: 12px;
  `;
  const cssWrapper = css`
    background-color: RGBA(0, 0, 0, 0.5);
    display: flex;
    padding: 24px 20px;
    border: 2px solid #fff;
    border-radius: 8px;
  `;
  const cssPlayButton = css`
    display: block;
    background: transparent;
    padding: 0;
    flex: 0 0 32px;
  `;
  const cssPlayButtonIcon = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
  `;
  return (
    <div css={cssWrapper}>
      <p css={cssText}>{props.text}</p>
      <button onClick={() => voicePlay()} css={cssPlayButton}>
        <span css={cssPlayButtonIcon}>
          <Icon name={'speaker'} width={22} height={22} />
        </span>
      </button>
    </div>
  );
};
