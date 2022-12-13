/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { RecordButton } from '../atoms/RecordButton';

interface IProps {
  text?: string;
}

export const RecordArea: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssWrapper = css`
    color: #fff;
  `;
  const cssText = css`
    color: #fff;
    margin: 0 0 30px;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.25;
    text-align: center;
  `;
  return (
    <div css={cssWrapper}>
      <p css={cssText}>
        {props.text ? (
          props.text
        ) : (
          <span>
            Hold the button below <br /> and repeat the phrase
          </span>
        )}
      </p>
      <RecordButton />
    </div>
  );
};
