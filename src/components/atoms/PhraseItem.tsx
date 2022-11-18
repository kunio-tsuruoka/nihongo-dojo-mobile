/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import { Icon } from '../atoms/Icon';

interface IProps {
  textYomikana: string;
  textJa: string;
  textEn: string;
  // ユーザー側は色が変わる
  isUser: boolean;
}

export const PhraseItem: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const cssWrapper = (isUser?: boolean) => css`
    padding: 8px 32px 8px 12px;
    background-color: #fff;
    border-radius: 0 14px 14px 14px;
    text-decoration: none;
    max-width: 283px;
    margin-left: 0;
    margin-right: auto;
    ${isUser &&
    `
    margin-left: auto;
    margin-right: 0;
    background-color: ${theme.color.primary0};
    border-radius: 14px 0 14px 14px;
      * {
        color: #FFF !important;
      }
    `}
  `;
  const cssText = css``;
  const cssIcon = css`
    margin-top: 4px;
    span {
      margin-right: 4px;
    }
  `;
  const cssTextYomikana = css`
    color: ${theme.color.text3};
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    font-weight: normal;
    letter-spacing: 0.2em;
  `;
  const cssTextJa = css`
    color: ${theme.color.text1};
    margin: 0;
    margin-top: 2px;
    font-size: 14px;
    line-height: 1.5;
    font-weight: bold;
  `;
  const cssTextEn = css`
    color: ${theme.color.text3};
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    margin-top: 2px;
    font-weight: bold;
  `;
  return (
    <div css={cssWrapper(props.isUser)}>
      <div css={cssText}>
        <p css={cssTextYomikana}>{props.textYomikana}</p>
        <p css={cssTextJa}>{props.textJa}</p>
        <p css={cssTextEn}>{props.textEn}</p>
      </div>
      <div css={cssIcon}>
        {props.isUser ? (
          <Icon name="play_small" width={24} height={24} />
        ) : (
          <Icon name="play" width={24} height={24} />
        )}
        {isPlaying && props.isUser && (
          <Icon name="audio" width={24} height={24} />
        )}
        {/* TODO：緑アイコンに変更 */}
        {isPlaying && !props.isUser && (
          <Icon name="audio" width={24} height={24} />
        )}
      </div>
    </div>
  );
};
