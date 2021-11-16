import styled from 'styled-components';

export const NavWrapper = styled.nav`
	background-color: ${(props) => props.theme.colors.bahamaBlue};
	color: ${(props) => props.theme.shades.white};
`;

export const NavList = styled.ul`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(12, 1fr);
	padding: 1.25rem 7.5rem;
`;

export const NavItem = styled.li`
	&:first-child {
		grid-column: 1 / span 10;
	}

	&:not(:first-child) {
		@media (hover) {
			&:hover,
			&:active,
			&:focus {
				text-decoration: underline;
			}
		}
	}
`;

export const NavTitle = styled.span`
	font-size: 1.5rem;
	font-weight: 700;
`;
