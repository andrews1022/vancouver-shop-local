import styled from 'styled-components';

// props
interface LabelProps {
	isChecked: boolean;
}

export const Wrapper = styled.li``;

export const Label = styled.label<LabelProps>`
	display: flex;
	align-items: center;
	background-color: ${({ isChecked, theme }) =>
		isChecked ? theme.colors.mediumAquamarine : 'transparent'};
	border: 0.125rem solid ${({ theme }) => theme.colors.mediumAquamarine};
	padding: 0.5rem 1rem;
	transition: ${({ theme }) => theme.transitions.standardTransition};
`;

export const Check = styled.input`
	margin-right: 0.5rem;
`;
