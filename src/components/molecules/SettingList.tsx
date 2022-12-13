/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { SettingRow } from '../atoms/SettingRow';

export const SettingList: React.FC = () => {
  const theme = useTheme();
  const cssTitle = css`
    color: ${theme.color.primary0};
    margin-bottom: 10px;
    font-size: 16px;
  `;
  const cssWrapper = css``;
  const cssList = css`
    list-style: none;
    margin: 0;
    margin-bottom: 40px;
    padding: 0;
  `;
  const cssItem = css`
    color: ${theme.color.primary0};
    border-top: 2px solid rgba(151, 156, 158, 0.3);
    &:last-child {
      border-bottom: 2px solid rgba(151, 156, 158, 0.3);
    }
  `;
  return (
    <div css={cssWrapper}>
      <h3 css={cssTitle}>General</h3>
      <ul css={cssList}>
        <li css={cssItem}>
          <SettingRow
            title="Sound Effect"
            iconName="setting_media"
            type="toggle"
            checked={true}
          />
        </li>
        <li css={cssItem}>
          <SettingRow
            title="Notification"
            iconName="setting_notifications"
            type="toggle"
            checked={true}
          />
        </li>
      </ul>
      <h3 css={cssTitle}>App info</h3>
      <ul css={cssList}>
        <li css={cssItem}>
          <SettingRow
            title="Terms and Use"
            iconName="setting_media"
            type="link"
            link="/"
          />
        </li>
        <li css={cssItem}>
          <SettingRow
            title="Privacy Policy"
            iconName="setting_security"
            type="link"
            link="/"
          />
        </li>
      </ul>
      <h3 css={cssTitle}>Feedback and Support</h3>
      <ul css={cssList}>
        <li css={cssItem}>
          <SettingRow
            title="Contact"
            iconName="setting_mail"
            type="link"
            link="/"
          />
        </li>
      </ul>
    </div>
  );
};
