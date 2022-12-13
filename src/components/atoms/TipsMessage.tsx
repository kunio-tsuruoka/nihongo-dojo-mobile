/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Icon } from '../atoms/Icon';

interface IProps {
  text: string;
}

export const TipsMessage: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssIcon = css`
    margin-right: 10px;
  `;
  const cssText = css`
    color: ${theme.color.text3};
    margin: 0;
  `;
  const cssWrapper = css`
    display: flex;
    align-items: flex-start;
    background-color: #fff;
    border-radius: 20px;
    padding: 8px 10px;
  `;
  return (
    <div css={cssWrapper}>
      <div css={cssIcon}>
        <Icon name="info" width={24} height={24} />
      </div>
      <p css={cssText}>{props.text}</p>
    </div>
  );
};
