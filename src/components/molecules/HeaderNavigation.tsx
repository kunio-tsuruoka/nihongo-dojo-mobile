/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Icon } from '../atoms/Icon';

interface IProps {
  type?: 'close' | 'back';
  src?: string;
  title?: string;
  background?: string | 'green' | 'transparent';
  arrowWhite: boolean;
}

export const HeaderNavigation: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssTitle = css`
    color: ${theme.color.text0};
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% - 80px);
    transform: translate(-50%, -50%);
  `;
  const cssWrapper = (cssBackground: IProps['background']) => css`
    /* background-color: ; */
    height: 60px;
    width: 100%;
    display: block;
    position: relative;
    ${cssBackground &&
    `
      background-color: ${cssBackground};
    `}
    ${cssBackground === 'green' &&
    `
      background-color: ${theme.color.bg1};
    `}
    ${cssBackground === 'transparent' &&
    `
      background-color: transparent;
    `}
  `;
  const cssIcon = css`
    position: absolute;
    left: 9px;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    a {
      width: 100%;
      height: 100%;
      display: block;
      position: relative;
    }
    .navIcon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `;
  // TODO：リンクかボタンか
  return (
    <div css={cssWrapper(props.background)}>
      <div css={cssIcon}>
        <a href={props.src}>
          {props.type === 'close' && props.arrowWhite && (
            <Icon
              name="close_white"
              width={16}
              height={16}
              className="navIcon"
            />
          )}
          {props.type === 'close' && !props.arrowWhite && (
            <Icon name="close" width={16} height={16} className="navIcon" />
          )}
          {props.type === 'back' && !props.arrowWhite && (
            <Icon
              name="allow_left"
              width={16}
              height={16}
              className="navIcon"
            />
          )}
        </a>
      </div>
      {props.title && <h1 css={cssTitle}>{props.title}</h1>}
    </div>
  );
};
