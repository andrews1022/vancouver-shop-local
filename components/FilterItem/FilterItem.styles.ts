import styled from 'styled-components';

// props
type LabelProps = {
  isChecked: boolean;
};

export const Label = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  background-color: ${({ isChecked, theme }) =>
    isChecked ? theme.colors.mediumAquamarine : 'transparent'};
  border: 0.125rem solid ${({ theme }) => theme.colors.mediumAquamarine};
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: ${({ theme }) => theme.transitions.standardTransition};
`;

export const Check = styled.input`
  margin-right: 0.5rem;
`;
