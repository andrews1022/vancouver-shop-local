import styled from "styled-components";

// base styles
import { baseGridStyles } from "../../styles/lib";

export const Wrapper = styled.div`
  padding: 1.5% ${({ theme }) => theme.spacing.leftRightDesktop};

  @media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
    margin-bottom: 4%;
  }
`;

export const FilterWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const FilterHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const BusinessesWrapper = styled.div``;

export const BusinessesList = styled.ul`
  ${baseGridStyles};
`;
