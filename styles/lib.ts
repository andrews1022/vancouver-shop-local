import { css } from 'styled-components';

export const baseLayoutStyles = css`
  background-color: ${({ theme }) => theme.colors.bahamaBlue};
  color: ${({ theme }) => theme.shades.white};
`;

export const baseGridStyles = css`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
`;
