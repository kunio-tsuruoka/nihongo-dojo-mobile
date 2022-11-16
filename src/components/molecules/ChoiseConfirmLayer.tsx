/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Button } from '../atoms/Button';

interface IProps {
  type: 'correct' | 'miss';
  correctText?: string;
  next: string | null;
}

export const ChoiseConfirmLayer: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssCorrectText = css`
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 13px;
  `;
  const cssTitle = css`
    /* color: ${theme.color.primary0}; */
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 8px;
  `;
  const cssWrapper = (type: IProps['type']) => css`
    background-color: #fff;
    padding: 16px;
    ${type === 'correct' &&
    `
      background-color: ${theme.color.bg1};
      color: ${theme.color.primary0}
    `}
    ${type === 'miss' &&
    `
      background-color: ${theme.color.bg2};
      color: ${theme.color.secondary0}
    `}
  `;
  return (
    <div css={cssWrapper(props.type)}>
      <h4 css={cssTitle}>
        {props.type === 'correct' ? 'Great!' : 'Correct Solution'}
      </h4>
      {props.type === 'miss' && props.correctText && (
        <p css={cssCorrectText}>{props.correctText}</p>
      )}
      <Button
        src={props.next}
        label="CONTINUE"
        type={props.type === 'correct' ? 'success' : 'alert'}
      />
    </div>
  );
};
