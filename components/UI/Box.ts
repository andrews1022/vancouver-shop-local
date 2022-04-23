// this coment is intended to be a child of the Flex UI component

import styled from 'styled-components';

type BoxBoxProps = {
  isFirstOnMobile?: boolean;
};

export const Box = styled.div<BoxBoxProps>`
  flex: 0 0 48%;

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    order: ${({ isFirstOnMobile }) => (isFirstOnMobile ? -1 : 1)};
    margin: 1rem 0;
  }

  a {
    color: ${({ theme }) => theme.colors.bahamaBlue};
    font-weight: 600;
  }

  li {
    list-style-type: disc;
    margin-left: 1.25rem;
  }
`;
