/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { ImageIcon } from '../atoms/ImageIcon';
import { Button } from '../atoms/Button';

interface IProps {
  text?: string;
}

export const NotificationModalInner: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssWrapper = css`
    color: #fff;
  `;
  const cssIcon = css`
    text-align: center;
    margin-bottom: 24px;
  `;
  const cssTitle = css`
    color: ${theme.color.text1};
    font-size: 14px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    margin: 0 0 16px;
  `;
  const cssText = css`
    color: ${theme.color.text1};
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
  `;
  const cssButtonArea = css`
    margin-top: 24px;
    > * {
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  `;
  return (
    <div css={cssWrapper}>
      <div css={cssIcon}>
        <ImageIcon name="bell" width={92} height={76} />
      </div>
      <div>
        <h3 css={cssTitle}>Enable Notifications</h3>
        <p css={cssText}>
          Notifications help you to study effectively. You can turn them off in
          the setting page anytime.
        </p>
      </div>
      <div css={cssButtonArea}>
        <Button src={null} label="TURN ON" type="success" tag="button" />
        <Button src={'/'} label="MAYBE LATER" type="transparent" />
      </div>
    </div>
  );
};
