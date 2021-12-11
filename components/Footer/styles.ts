import styled from 'styled-components';

// shared styles
import { baseLayoutStyles } from '../../styles/lib';

export const FooterWrapper = styled.footer`
	${baseLayoutStyles};
	padding: 2.5rem ${({ theme }) => theme.spacing.leftRightDesktop};
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Box = styled.div``;

export const Title = styled.span`
	font-size: 1.25rem;
	font-weight: 500;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul``;

export const NavItem = styled.li`
	&:first-child {
		margin-bottom: 1rem;
	}
`;

export const Copyright = styled.p`
	text-align: center;
`;
