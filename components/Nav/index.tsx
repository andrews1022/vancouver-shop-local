// next
import Link from 'next/link';

// react
import React from 'react';

// styled components
import { NavItem, NavList, NavTitle, NavWrapper } from './styles';

const Nav = () => (
	<NavWrapper>
		<NavList>
			<NavItem>
				<NavTitle>
					<Link href='/'>Vancouver Local Shop</Link>
				</NavTitle>
			</NavItem>

			<NavItem>
				<Link href='/about'>About</Link>
			</NavItem>

			<NavItem>
				<Link href='/contact'>Contact</Link>
			</NavItem>
		</NavList>
	</NavWrapper>
);

export default Nav;
