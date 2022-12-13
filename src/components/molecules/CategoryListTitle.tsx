/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

interface IProps {
  title: string;
  full: number;
  done: number;
  thumb: string;
}

export const CategoryListTitle: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const archiveWidth = Math.round((props.done / props.full) * 100) / 100;
  const cssWrapper = css`
    display: flex;
    align-items: center;
  `;
  const cssThumbnail = css`
    width: 48px;
    flex: 0 0 48px;
    margin-right: 8px;
    border-radius: 8px;
    overflow: hidden;
  `;
  const cssTitle = css`
    color: ${theme.color.text1};
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
    font-weight: bold;
  `;
  const cssAchivement = css`
    flex: 0 0 80px;
    margin-left: 20px;
  `;
  const cssArchivementNumber = css`
    color: ${theme.color.text1};
    font-size: 12px;
    margin: 0;
    display: block;
    margin-bottom: -8px;
  `;
  const cssBar = (barWidth: number) => css`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    &::after {
      content: '';
      position: absolute;
      width: calc(100% * ${barWidth});
      display: inline-block;
      height: 8px;
      border-radius: 4px;
      left: 0;
      top: 0;
      background-color: ${theme.color.primary0};
      z-index: 1;
    }
  `;
  return (
    <div css={cssWrapper}>
      <div css={cssThumbnail}>
        <img src={props.thumb} alt="" />
      </div>
      <h2 css={cssTitle}>{props.title}</h2>
      <div css={cssAchivement}>
        <span css={cssArchivementNumber}>
          {props.done} / {props.full}
        </span>
        <span css={cssBar(archiveWidth)}></span>
      </div>
    </div>
  );
};
