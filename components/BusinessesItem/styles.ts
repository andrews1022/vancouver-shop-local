import styled from 'styled-components';

// types
import { TagMode } from '../../types/types';

// utils
import setTagBackgroundColor from '../../utils/setTagBackgroundColor';

// props
interface TagProps {
	mode: TagMode;
}

export const Wrapper = styled.li`
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

export const Heading = styled.h3`
	font-size: 1.25rem;
`;

export const Description = styled.p``;

export const Tags = styled.ul`
	display: inline-flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 1rem;
`;

export const Tag = styled.li<TagProps>`
	display: inline-flex;
	align-items: center;
	line-height: 1.25;
	padding: 0.5rem;
	background-color: ${(props) => setTagBackgroundColor(props.mode)};
	color: ${({ theme }) => theme.shades.white};

	svg {
		margin-left: 0.5rem;
	}
`;
