import styled from "styled-components";

// shared styles
import { baseLayoutStyles } from "../../styles/lib";

export const Footer = styled.footer`
  ${baseLayoutStyles};
  margin-top: auto;
  padding: 2.5rem ${({ theme }) => theme.spacing.leftRightDesktop};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  &:first-child {
    @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
      flex: 1;
      margin-bottom: 3.5%;
      text-align: center;
    }
  }

  &:last-child {
    @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
      display: none;
    }
  }
`;

export const Title = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
`;

export const NavItem = styled.li`
  &:first-child {
    margin-bottom: 1rem;
  }
`;

export const Copyright = styled.p`
  text-align: center;
`;
