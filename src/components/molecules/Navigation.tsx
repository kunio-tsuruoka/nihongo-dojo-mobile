/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Icon } from '../atoms/Icon';

interface IProps {
  current: 'Categories' | 'Review' | 'Me' | 'Setting' | undefined;
}

export const Navigation: React.FC<IProps> = (props) => {
  const theme = useTheme();

  const navList = [
    {
      href: '/category',
      title: 'Categories',
      icon: 'folder',
    },
    {
      href: '/review',
      title: 'Review',
      icon: 'review',
    },
    {
      href: '/me',
      title: 'Me',
      icon: 'user',
    },
    {
      href: '/setting',
      title: 'Setting',
      icon: 'setting',
    },
  ];

  const cssWrapper = css`
    width: 100%;
    background: rgba(${theme.color.text2}, 0.5);
    backdrop-filter: blur(4px);
  `;
  const cssList = css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      width: 100%;
      &.current * {
        color: ${theme.color.primary1} !important;
      }
    }
  `;
  const cssItem = css`
    text-decoration: none;
    color: ${theme.color.text2};
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 10px;
    padding: 10px 0 22px;
    width: 100%;
    .icon {
      margin-bottom: 4px;
    }
  `;
  return (
    <nav css={cssWrapper}>
      <ul css={cssList}>
        {navList.map((item: any, index) => (
          <li
            className={item.title === props.current ? 'current' : ''}
            key={index}
          >
            {/* TODO：currentのアイコン用意してもらう */}
            <a href={item.href} css={cssItem}>
              <span className="icon">
                <Icon name={item.icon} width={24} height={24} />
              </span>
              <span className="title">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
