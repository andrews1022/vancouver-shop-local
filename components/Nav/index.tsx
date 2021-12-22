// next
import Link from 'next/link';

// react
import React from 'react';

// data
import { homeSlug, aboutSlug, contactSlug } from '../../data/constants';

// styled components
import { Item, List, Title, Wrapper } from './styles';

const Nav = () => (
	<Wrapper>
		<List>
			<Item>
				<Title>
					<Link href={homeSlug}>Vancouver Shop Local</Link>
				</Title>
			</Item>

			<Item>
				<Link href={aboutSlug}>About</Link>
			</Item>

			<Item>
				<Link href={contactSlug}>Contact</Link>
			</Item>
		</List>
	</Wrapper>
);

export default Nav;
