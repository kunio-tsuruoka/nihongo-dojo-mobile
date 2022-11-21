/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { ImageIcon } from '../atoms/ImageIcon';

interface IProps {
  isCorrect?: boolean;
  isAchivement: boolean;
}

export const ButtleIllust: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssText = css`
    color: ${theme.color.primary0};
  `;
  const cssEnemy = css`
    position: relative;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
  `;
  const cssAttack = (cssIsCorrect: boolean | undefined) => css`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${!cssIsCorrect &&
    `
      right: 30px;
      left: auto;
      transform: translateY(-50%);
    `}
  `;
  const cssWrapper = css`
    width: 100%;
    text-align: center;
  `;
  return (
    <div css={cssWrapper}>
      <div css={cssEnemy}>
        {props.isAchivement ? (
          <ImageIcon name="treasureBox" width={86} height={66} />
        ) : (
          <>
            <ImageIcon name="enemy" width={74} height={126} />
            <div css={cssAttack(props.isCorrect)}>
              <ImageIcon name="shockWave" width={87} height={87} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
