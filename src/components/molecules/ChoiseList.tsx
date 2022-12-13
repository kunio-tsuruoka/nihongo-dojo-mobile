/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { ChoiseItem } from '../atoms/ChoiseItem';

export const ChoiseList: React.FC = () => {
  const theme = useTheme();

  const list = [
    {
      text: 'Why are you angry?',
      icon: 'shuriken',
      id: 'choise1',
      isWrong: true,
    },
    {
      text: 'Why are you angry?Why are you angry?',
      icon: 'gu',
      id: 'choise2',
    },
    {
      text: 'Why are you angry?Why are you angry?Why are you angry?',
      icon: 'kunai',
      id: 'choise3',
    },
    {
      text: 'Why are you angry?Why are you angry?',
      icon: 'sord',
      id: 'choise4',
    },
  ];

  const cssWrapper = css``;
  const cssList = css`
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  `;
  const cssInput = css`
    display: none;
    &:checked {
      + label {
        .choiseItem__wrapper {
          background-color: ${theme.color.bg0};
          border-color: ${theme.color.primary0};
        }
      }
    }
  `;

  return (
    <nav css={cssWrapper}>
      <ul css={cssList}>
        {list.map((item: any, index) => (
          <li key={index}>
            <input type="radio" name="choise" id={item.id} css={cssInput} />
            <label htmlFor={item.id}>
              <ChoiseItem
                text={item.text}
                icon={item.icon}
                isWrong={item.isWrong}
              />
            </label>
          </li>
        ))}
      </ul>
    </nav>
  );
};
