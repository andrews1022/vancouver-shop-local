import styled from 'styled-components';

// props
interface FilterLabelProps {
	isChecked: boolean;
}

export const FilterItemWrapper = styled.li``;

export const FilterLabel = styled.label<FilterLabelProps>`
	display: flex;
	align-items: center;
	background-color: ${({ isChecked, theme }) =>
		isChecked ? theme.colors.mediumAquamarine : 'transparent'};
	border: 0.125rem solid ${({ theme }) => theme.colors.mediumAquamarine};
	padding: 0.5rem 1rem;
	transition: ${({ theme }) => theme.transitions.standardTransition};
`;

export const FilterCheck = styled.input`
	margin-right: 0.5rem;
`;
