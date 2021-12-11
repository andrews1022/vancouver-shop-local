import type { NextPage } from 'next';
import Image from 'next/image';

// components
import FiftyFifty from '../components/FiftyFifty';
import FiftyFiftyBox from '../components/FiftyFiftyBox';

// images
import AboutImg from '../public/images/about.jpg';

const About: NextPage = () => (
	<>
		<FiftyFifty>
			<FiftyFiftyBox>
				<Image src={AboutImg} alt='woman paying cashier in local business' />
			</FiftyFiftyBox>
			<FiftyFiftyBox>
				<h1>What is Vancouver Shop Local?</h1>
				<p>
					Vancouver Shop Local is an effort that started on the{' '}
					<a href='https://www.reddit.com/r/vancouver/' target='_blank' rel='noopener noreferrer'>
						Vancouver subreddit
					</a>{' '}
					to help support local businesses in the Greater Vancouver Area during the holiday shopping
					season, instead of buying from big chain retailors or online from sites like Amazon.
				</p>
				<p>There you can also find the shop of the week and possibly some deals!</p>
			</FiftyFiftyBox>
		</FiftyFifty>
	</>
);

export default About;
