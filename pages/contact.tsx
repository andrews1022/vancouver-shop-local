import type { NextPage } from 'next';
import Image from 'next/image';

// components
import FiftyFifty from '../components/FiftyFifty';
import FiftyFiftyBox from '../components/FiftyFiftyBox';

// data
import { threadSlug } from '../data/constants';

// images
import ContactImg from '../public/images/contact.jpg';

const Contact: NextPage = () => (
	<>
		<FiftyFifty>
			<FiftyFiftyBox>
				<Image src={ContactImg} alt='person accepting a package from a local business' />
			</FiftyFiftyBox>
			<FiftyFiftyBox>
				<h1>Contact</h1>
				<p>
					For all contact related details, please see the post on the{' '}
					<a href={threadSlug} target='_blank' rel='noopener noreferrer'>
						subreddit
					</a>
					.
				</p>
			</FiftyFiftyBox>
		</FiftyFifty>
	</>
);

export default Contact;
