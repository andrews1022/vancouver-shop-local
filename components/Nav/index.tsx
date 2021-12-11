// next
import Link from 'next/link';

// react
import React from 'react';

// data
import { homeSlug, aboutSlug, contactSlug } from '../../data/constants';

// styled components
import { NavItem, NavList, NavTitle, NavWrapper } from './styles';

const Nav = () => (
	<NavWrapper>
		<NavList>
			<NavItem>
				<NavTitle>
					<Link href={homeSlug}>Vancouver Shop Local</Link>
				</NavTitle>
			</NavItem>

			<NavItem>
				<Link href={aboutSlug}>About</Link>
			</NavItem>

			<NavItem>
				<Link href={contactSlug}>Contact</Link>
			</NavItem>
		</NavList>
	</NavWrapper>
);

export default Nav;
