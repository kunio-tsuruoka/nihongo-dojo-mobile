/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { PhraseItem } from '../atoms/PhraseItem';

export const PhraseList: React.FC = () => {
  const theme = useTheme();

  const navList = [
    {
      textYomikana: 'onaka suita yomi kana onaka suita yomi kana',
      textEn: 'its hard to die yomikana ari',
      textJa: 'お腹すいたよみかなあり',
      isUser: false,
    },
    {
      textYomikana: 'onaka suita yomi kana',
      textEn:
        'its hard to dieits hard to dieits hard to dieits hard to dieits h',
      textJa:
        'あああああああああああああああああああああああああああああああああああああ',
      isUser: true,
    },
    {
      textYomikana: 'onaka suita yomi kana onaka suita yomi kana',
      textEn: 'its hard to die',
      textJa: 'お腹すいた',
      isUser: false,
    },
    {
      textYomikana: 'onaka suita yomi kana onaka suita yomi kana',
      textEn: 'its hard to dieits hard to dieits hard to dies',
      textJa: 'お腹すいた',
      isUser: true,
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
            <PhraseItem
              textEn={item.textEn}
              textJa={item.textJa}
              isUser={item.isUser}
              textYomikana={item.textYomikana}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
