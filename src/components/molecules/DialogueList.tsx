/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { DialogueItem } from '../atoms/DialogueItem';

export const DialogueList: React.FC = () => {
  const theme = useTheme();

  const navList = [
    {
      textEn: 'its hard to die',
      textJa: 'お腹すいた',
      isDone: true,
      href: '/',
    },
    {
      textEn:
        'its hard to dieits hard to dieits hard to dieits hard to dieits h',
      textJa:
        'あああああああああああああああああああああああああああああああああああああ',
      isDone: true,
      href: '/',
    },
    {
      textEn: 'its hard to die',
      textJa: 'お腹すいた',
      isDone: false,
      href: '/',
    },
    {
      textEn: 'its hard to die',
      textJa: 'お腹すいた',
      isDone: false,
      href: '/',
    },
  ];

  const cssWrapper = css``;
  const cssList = css`
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 12px;
    }
  `;

  return (
    <nav css={cssWrapper}>
      <ul css={cssList}>
        {navList.map((item: any, index) => (
          <li key={index}>
            <DialogueItem
              textEn={item.textEn}
              textJa={item.textJa}
              isDone={item.isDone}
              href={item.href}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
