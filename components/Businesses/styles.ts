import styled from 'styled-components';

// base styles
import { baseGridStyles } from '../../styles/lib';

export const Wrapper = styled.div`
	padding: 1.5% ${(props) => props.theme.spacing.leftRightDesktop};

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

export const BusinessesItem = styled.li`
	border: 0.125rem solid ${(props) => props.theme.shades.gainsboro};
	grid-column: span 3;
	padding: 0.75rem;
	transition: ${({ theme }) => theme.transitions.standardTransition};

	@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
		grid-column: span 4;
	}

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		grid-column: span 6;
	}

	@media ${({ theme }) => theme.mediaQueries.mobileLarge} {
		grid-column: 1/-1;
	}

	@media (hover) {
		&:hover,
		&:active,
		&:focus {
			box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.06);
		}
	}
`;

export const BusinessesHeading = styled.h3`
	font-size: 1.25rem;
`;

export const BusinessesDescription = styled.p``;

export const BusinessesCategory = styled.span`
	display: inline-flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.bahamaBlue};
	color: ${({ theme }) => theme.shades.white};
	line-height: 1.25;
	padding: 0.5rem;

	svg {
		margin-left: 0.5rem;
	}
`;

export const BusinessesLink = styled.a`
	display: block;
	margin-top: 0.75rem;

	svg {
		opacity: 0;
		transform: translateX(-1.25rem);
		transition: ${({ theme }) => theme.transitions.standardTransition};
	}

	@media (hover) {
		&:hover,
		&:active,
		&:focus {
			color: ${({ theme }) => theme.colors.scooter};
			text-decoration: underline;

			svg {
				opacity: 1;
				transform: translateX(0.5rem);
			}
		}
	}

	@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
		color: ${({ theme }) => theme.colors.scooter};
		text-decoration: underline !important;

		svg {
			opacity: 1;
			transform: translateX(0.5rem);
		}
	}
`;
