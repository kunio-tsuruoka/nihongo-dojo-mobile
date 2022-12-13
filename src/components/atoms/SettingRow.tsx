/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Icon } from './Icon';
import { IonToggle } from '@ionic/react';

import { ReactNode } from 'react';
interface IWrapperProps {
  type: 'link' | 'toggle';
  children: ReactNode;
  link?: string;
}
interface IProps {
  title: string;
  iconName: string;
  type: IWrapperProps['type'];
  checked?: boolean;
  link?: IWrapperProps['link'];
  // TODO: and toggle function?
}

const SettingRowWrapper: React.FC<IWrapperProps> = (props) => {
  if (props.type === 'link') {
    return <a href={props.link}>{props.children}</a>;
  } else {
    return <div>{props.children}</div>;
  }
};

export const SettingRow: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssWrapper = css`
    color: ${theme.color.primary0};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
  `;
  const cssInner = css`
    display: flex;
    align-items: center;
  `;
  const cssIcon = css`
    color: ${theme.color.primary0};
  `;
  const cssTitle = css`
    color: ${theme.color.text1};
    margin: 0;
    margin-left: 8px;
    padding: 0;
  `;
  const cssButtonIcon = css`
    margin: 0;
    padding: 0;
    span {
      display: block;
    }
  `;
  const cssToggle = css`
    --background: #979c9e;
    --background-checked: #12b886;
    --handle-background: #fff;
    --handle-background-checked: #fff;
    --handle-spacing: 4px;
    --handle-border-radius: 8px 8px 8px 8px;
    --handle-width: 16px;
    --handle-height: 16px;
    height: 24px;
    width: 44px;
    padding: 0;
  `;
  return (
    <SettingRowWrapper type={props.type}>
      <div css={cssWrapper}>
        <div css={cssInner}>
          <div css={cssIcon}>
            <Icon name={props.iconName} width={24} height={24} />
          </div>
          <p css={cssTitle}>{props.title}</p>
        </div>
        <div css={cssButtonIcon}>
          {props.type === 'link' ? (
            <Icon name={'arrow_right'} width={8} height={16} />
          ) : (
            // https://ionicframework.com/docs/ja/api/toggle
            <IonToggle checked={props.checked} css={cssToggle} />
          )}
        </div>
      </div>
    </SettingRowWrapper>
  );
};
