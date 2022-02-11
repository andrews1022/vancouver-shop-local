// next
import Link from 'next/link';

// react
import React from 'react';

// constants
import { SLUG_ABOUT, SLUG_CONTACT, SLUG_HOME } from '../../constants/urls';

// styled components
import * as S from './styles';

const Nav = () => (
	<S.Nav>
		<S.List>
			<S.Item>
				<S.Title>
					<Link href={SLUG_HOME}>Vancouver Shop Local</Link>
				</S.Title>
			</S.Item>

			<S.Item>
				<Link href={SLUG_ABOUT}>About</Link>
			</S.Item>

			<S.Item>
				<Link href={SLUG_CONTACT}>Contact</Link>
			</S.Item>
		</S.List>
	</S.Nav>
);

export default Nav;
