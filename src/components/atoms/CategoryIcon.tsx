/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { ImageIcon } from '../atoms/ImageIcon';

interface IProps {
  categoryTitle: string;
  isOpen: boolean;
  full: number;
  done: number | string;
  innerImg?: string;
}

export const CategoryIcon: React.FC<IProps> = (props) => {
  // TODO：カテゴリ画像書き出し
  const theme = useTheme();
  const cssWrapper = css`
    width: 80px;
  `;
  const cssTitle = css`
    color: ${theme.color.text1};
    font-size: 9px;
    text-align: center;
    padding: 2px 0;

    font-weight: 600;
    width: 71px;
    border-radius: 4px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    margin-top: 8px;
  `;
  const cssIcon = css`
    position: relative;
    width: 80px;
    height: 80px;
  `;
  const cssAchivement = css`
    position: absolute;
    right: 5px;
    bottom: -5px;
    background-color: ${theme.color.primary0};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 6px;
      font-weight: bold;
      z-index: 2;
      width: 100%;
    }
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 24px;
      height: 24px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: ${theme.color.primary0};
      opacity: 0.6;
      border-radius: 50%;
    }
  `;
  const cssIconInnerImage = css`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  `;
  return (
    <div css={cssWrapper}>
      <div css={cssIcon}>
        {props.isOpen == true ? (
          <>
            <ImageIcon name="category_open" width={80} height={80} />
            {props.innerImg && (
              <div css={cssIconInnerImage}>
                <img src={props.innerImg} alt="" />
              </div>
            )}
          </>
        ) : (
          <ImageIcon name="category_close" width={80} height={80} />
        )}
        <div css={cssAchivement}>
          <span>
            {props.done} / {props.full}
          </span>
        </div>
      </div>
      <div css={cssTitle}>
        <span>{props.categoryTitle}</span>
      </div>
    </div>
  );
};
