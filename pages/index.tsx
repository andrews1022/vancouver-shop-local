// next
import type { NextPage } from 'next';
import Image from 'next/image';

// react
import React from 'react';

// components
import Businesses from '../components/Businesses';
import ExternalLink from '../components/ExternalLink';

// styled components
import { Copy } from '../components/UI/Copy';
import { FiftyFiftyBox } from '../components/UI/FiftyFiftyBox';
import { FiftyFiftyWrapper } from '../components/UI/FiftyFiftyWrapper';

// constants
import { SLUG_REDDIT_THREAD } from '../constants/urls';

// images
import HomeImg from '../public/images/home.jpg';

const Home: NextPage = () => (
	<>
		<FiftyFiftyWrapper>
			<FiftyFiftyBox>
				<h1>Welcome to Vancouver Shop Local!</h1>

				<Copy>
					Vancouver Shop Local is an effort that started on the{' '}
					<ExternalLink href={SLUG_REDDIT_THREAD}> Vancouver subreddit</ExternalLink> to help
					support local businesses in the Greater Vancouver Area during the holiday shopping season,
					instead of buying from big chain retailors or online from sites like Amazon. Below,
					you&apos;ll find a list of businesses/artists/crafters.
				</Copy>
			</FiftyFiftyBox>

			<FiftyFiftyBox isFirstOnMobile>
				<Image src={HomeImg} alt='person accepting a package from a local business' />
			</FiftyFiftyBox>
		</FiftyFiftyWrapper>

		<Businesses />
	</>
);

export default Home;
