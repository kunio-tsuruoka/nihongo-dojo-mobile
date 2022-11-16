/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Icon } from '../atoms/Icon';

interface IProps {
  text: string;
}

export const RecordTitle: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const voicePlay = () => {
    // TODO：音声再生
  };
  const cssText = css`
    font-size: 20px;
    color: #fff;
    line-height: 1.3;
    display: block;
    margin: 0;
    font-weight: bold;
    margin-right: 16px;
  `;
  const cssWrapper = css`
    display: flex;
    align-items: flex-start;
    padding: 0px 16px;
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
    align-items: center;
    justify-content: center;
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
