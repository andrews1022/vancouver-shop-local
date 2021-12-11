// next
import Link from 'next/link';

// react
import React from 'react';

// data
import { homeSlug, aboutSlug, contactSlug } from '../../data/constants';

// styled components
import { Box, Copyright, FooterWrapper, Nav, NavItem, NavList, Row, Title } from './styles';

const Footer = () => (
	<FooterWrapper>
		<Row>
			<Box>
				<Title>
					<Link href={homeSlug}>Vancouver Shop Local</Link>
				</Title>
			</Box>

			<Box>
				<Nav>
					<NavList>
						<NavItem>
							<Link href={aboutSlug}>About</Link>
						</NavItem>
						<NavItem>
							<Link href={contactSlug}>Contact</Link>
						</NavItem>
					</NavList>
				</Nav>
			</Box>
		</Row>

		<Copyright>Copyright © {new Date().getFullYear()} - All Rights Reserved.</Copyright>
	</FooterWrapper>
);

export default Footer;
