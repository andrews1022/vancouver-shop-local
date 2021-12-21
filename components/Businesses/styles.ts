import styled from 'styled-components';

// base styles
import { baseGridStyles } from '../../styles/lib';

export const Wrapper = styled.div`
	padding: 1.5% ${(props) => props.theme.spacing.leftRightDesktop};
`;

// filter
export const FilterWrapper = styled.div`
	margin-bottom: 1.5rem;
`;

export const FilterHeading = styled.h2`
	margin-bottom: 0.5rem;
`;

export const FilterList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;

export const FilterItem = styled.li`
	margin-bottom: 0.5rem;
`;

export const FilterLabel = styled.label`
	display: flex;
	align-items: center;
	border: 2px solid red;
	padding: 0.5rem 1rem;
`;

export const FilterCheck = styled.input`
	margin-right: 0.5rem;
`;

// cards
export const BusinessesWrapper = styled.div``;

export const BusinessesList = styled.ul`
	${baseGridStyles};
`;

export const BusinessesItem = styled.li`
	border: 2px solid blue;
	grid-column: span 3;
	padding: 0.75rem;
`;

export const BusinessesHeading = styled.h3``;

export const BusinessesDescription = styled.p``;

export const BusinessesCategory = styled.span``;

export const BusinessesLink = styled.a``;
