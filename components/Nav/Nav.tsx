import Link from 'next/link';

// styled components
import * as S from './Nav.styles';

// data
import links from '../../data/links';

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
