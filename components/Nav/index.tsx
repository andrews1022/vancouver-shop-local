// next
import Link from 'next/link';

// react
import React from 'react';

// data
import links from '../../data/links';

// styled components
import * as S from './styles';

const Nav = () => (
  <S.Nav>
    <S.List>
      {links.map((link) => (
        <S.Item key={link.id}>
          <Link href={link.slug}>{link.text}</Link>
        </S.Item>
      ))}
    </S.List>
  </S.Nav>
);

export default Nav;
