// next
import Link from 'next/link';

// react
import React from 'react';

// constants
import { SLUG_ABOUT, SLUG_CONTACT, SLUG_HOME } from '../../constants/urls';

// styled components
import * as S from './styles';

const Footer = () => (
	<S.Footer>
		<S.Row>
			<S.Box>
				<S.Title>
					<Link href={SLUG_HOME}>Vancouver Shop Local</Link>
				</S.Title>
			</S.Box>

			<S.Box>
				<nav>
					<ul>
						<S.NavItem>
							<Link href={SLUG_ABOUT}>About</Link>
						</S.NavItem>

						<S.NavItem>
							<Link href={SLUG_CONTACT}>Contact</Link>
						</S.NavItem>
					</ul>
				</nav>
			</S.Box>
		</S.Row>

		<S.Copyright>Copyright © {new Date().getFullYear()} - All Rights Reserved.</S.Copyright>
	</S.Footer>
);

export default Footer;
