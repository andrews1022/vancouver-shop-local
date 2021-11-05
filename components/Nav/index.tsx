// next
import Link from 'next/link';

// react
import React from 'react';

// styled components
import { NavWrapper } from './styles';

const Nav = () => (
	<NavWrapper>
		<ul className='nav-list'>
			<li className='nav-item'>
				<h1>
					<Link href='/'>Vancouver Local Shop</Link>
				</h1>
			</li>

			<li className='nav-item'>
				<Link href='/about'>About</Link>
			</li>

			<li className='nav-item'>
				<Link href='/contact'>Contact</Link>
			</li>
		</ul>
	</NavWrapper>
);

export default Nav;
