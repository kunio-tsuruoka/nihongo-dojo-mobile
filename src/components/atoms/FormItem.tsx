/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';

interface IProps extends IInputProps {
  inputType: 'input' | 'textarea';
  label: string;
}
interface IInputProps {
  id: string;
  name: string;
  required: boolean;
  placeholder?: string;
  type?: string;
}

// const theme = useTheme();
const cssInputCommon = css`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  width: 100%;
  font-weight: normal;
  font-size: 14px;
  &:placeholder {
    font-weight: 100;
    color: rgba(153, 156, 160);
  }
`;

const InputText: React.FC<IInputProps> = (props) => {
  const cssInput = css`
    ${cssInputCommon}
  `;
  return (
    <input
      type={props.type}
      css={cssInput}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
    />
  );
};
const InputTextArea: React.FC<IInputProps> = (props) => {
  const cssInputTextArea = css`
    ${cssInputCommon}
    min-height: 200px;
  `;
  return (
    <textarea
      id={props.id}
      css={cssInputTextArea}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
    ></textarea>
  );
};

export const FormItem: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const cssWrapper = css`
    color: ${theme.color.primary0};
  `;
  const cssLabel = css`
    color: ${theme.color.text1};
    display: block;
    margin-bottom: 10px;
  `;
  let inner;
  switch (props.inputType) {
    case 'input':
      inner = (
        <InputText
          id={props.id}
          type={props.type}
          name={props.name}
          required={props.required}
          placeholder={props.placeholder}
        />
      );
      break;
    case 'textarea':
      inner = (
        <InputTextArea
          id={props.id}
          name={props.name}
          required={props.required}
          placeholder={props.placeholder}
        />
      );
  }
  return (
    <div css={cssWrapper}>
      <label htmlFor={props.name} css={cssLabel}>
        {props.label}
      </label>
      {inner}
    </div>
  );
};
