import Image from 'next/image';
import type { NextPage } from 'next';

// components
import ExternalLink from '../components/ExternalLink';

// styled components
import { Copy } from '../components/UI/Copy';
import { FiftyFiftyBox } from '../components/UI/FiftyFiftyBox';
import { FiftyFiftyWrapper } from '../components/UI/FiftyFiftyWrapper';

// constants
import { SLUG_REDDIT_THREAD } from '../constants/urls';

// images
import ContactImg from '../public/images/contact.jpg';

const Contact: NextPage = () => (
	<FiftyFiftyWrapper>
		<FiftyFiftyBox>
			<Image src={ContactImg} alt='person accepting a package from a local business' />
		</FiftyFiftyBox>

		<FiftyFiftyBox>
			<h1>Contact</h1>

			<Copy>
				For all contact related details, please see the post on the{' '}
				<ExternalLink href={SLUG_REDDIT_THREAD}>subreddit</ExternalLink>.
			</Copy>
		</FiftyFiftyBox>
	</FiftyFiftyWrapper>
);

export default Contact;
