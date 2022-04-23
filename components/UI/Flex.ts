import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5% ${({ theme }) => theme.spacing.leftRightDesktop};

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    align-items: flex-start;
    flex-direction: column;
  }
`;
