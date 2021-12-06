import type { NextPage } from 'next';
import Image from 'next/image';

// images
import AboutImg from '../public/images/about.jpg';

const About: NextPage = () => (
	<>
		<div className='fifty-fifty'>
			<div className='fifty-fifty-box'>
				<h1>What is Vancouver Shop Local?</h1>
				<p>
					Vancouver Shop Local is an effort that started on the{' '}
					<a href='https://www.reddit.com/r/vancouver/' target='_blank' rel='noopener noreferrer'>
						Vancouver subreddit
					</a>{' '}
					to help support local businesses in the Greater Vancouver Area during the holiday shopping
					season, instead of buying from big chain retailors or online from sites like Amazon.
				</p>
			</div>
			<div className='fifty-fifty-box'>
				<Image src={AboutImg} alt='woman paying cashier in local business' />
			</div>
		</div>
	</>
);

export default About;
