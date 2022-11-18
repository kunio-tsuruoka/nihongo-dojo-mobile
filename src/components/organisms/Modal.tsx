/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import React, { ReactNode, useRef } from 'react';
import { IonModal } from '@ionic/react';

interface IProps {
  children: ReactNode;
  trigger: string;
  haveCloseButton: boolean;
  width?: string;
}

// 参考
// https://ionicframework.com/docs/ja/api/modal#custom-dialogs
export const Modal: React.FC<IProps> = (props) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const theme = useTheme();

  function dismiss() {
    modal.current?.dismiss();
  }
  const cssWrapper = (width: string | undefined) => css`
    width: 90vw;
    position: relative;
    padding: 47px 14px 16px;
    max-width: 400px;
    ${width &&
    `
      width: ${width}
    `}
  `;
  const cssContainer = css``;
  const cssCloseButton = css`
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    span {
      position: absolute;
      display: block;
      top: 10px;
      right: 10px;
      width: 32px;
      height: 32px;
      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        display: inline-block;
        width: 24px;
        height: 2px;
        background-color: ${theme.color.text1};
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  `;
  const cssModalWrapper = css`
    --width: fit-content;
    --min-width: 250px;
    --height: fit-content;
    --border-radius: 6px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  `;
  return (
    <IonModal
      id="example-modal"
      ref={modal}
      trigger={props.trigger}
      css={cssModalWrapper}
    >
      <div css={cssWrapper(props.width)}>
        {props.haveCloseButton && (
          <button css={cssCloseButton} onClick={dismiss}>
            <span></span>
          </button>
        )}
        <div css={cssContainer}>{props.children}</div>
      </div>
    </IonModal>
  );
};
