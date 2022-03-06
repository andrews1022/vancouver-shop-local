import styled from 'styled-components';

// shared styles
import { baseGridStyles, baseLayoutStyles } from '../../styles/lib';

export const Nav = styled.nav`
  ${baseLayoutStyles};
`;

export const List = styled.ul`
  ${baseGridStyles};
  align-items: center;
  padding: 1.25rem ${({ theme }) => theme.spacing.leftRightDesktop};
`;

export const Item = styled.li`
  &:first-child {
    grid-column: 1 / span 10;
  }
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;
