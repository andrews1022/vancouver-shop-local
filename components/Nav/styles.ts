import styled from 'styled-components';

// shared styles
import { baseGridStyles, baseLayoutStyles } from '../../styles/lib';

export const NavWrapper = styled.nav`
	${baseLayoutStyles};
`;

export const NavList = styled.ul`
	${baseGridStyles};
	align-items: center;
	padding: 1.25rem ${({ theme }) => theme.spacing.leftRightDesktop};
`;

export const NavItem = styled.li`
	&:first-child {
		grid-column: 1 / span 10;
	}

	&:not(:first-child) {
	}
`;

export const NavTitle = styled.span`
	font-size: 1.5rem;
	font-weight: 700;
`;
