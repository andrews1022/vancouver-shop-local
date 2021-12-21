import styled from 'styled-components';

// props
interface FilterLabelProps {
	isChecked: boolean;
}

export const FilterItemWrapper = styled.li``;

export const FilterLabel = styled.label<FilterLabelProps>`
	display: flex;
	align-items: center;
	background-color: ${(props) =>
		props.isChecked ? props.theme.colors.mediumAquamarine : 'transparent'};
	border: 2px solid ${(props) => props.theme.colors.mediumAquamarine};
	padding: 0.5rem 1rem;
`;

export const FilterCheck = styled.input`
	margin-right: 0.5rem;
`;
