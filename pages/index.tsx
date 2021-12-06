import type { NextPage } from 'next';
import Image from 'next/image';

// images
import HomeImg from '../public/images/home.jpg';

const Home: NextPage = () => (
	<>
		<div className='fifty-fifty'>
			<div className='fifty-fifty-box'>
				<h1>Welcome to Vancouver Shop Local!</h1>
				<p>
					Vancouver Shop Local is an effort that started on the{' '}
					<a href='https://www.reddit.com/r/vancouver/' target='_blank' rel='noopener noreferrer'>
						Vancouver subreddit
					</a>{' '}
					to help support local businesses in the Greater Vancouver Area during the holiday shopping
					season, instead of buying from big chain retailors or online from sites like Amazon.
					Below, you’ll find a list of businesses/artists/crafters.
				</p>
			</div>
			<div className='fifty-fifty-box'>
				<Image src={HomeImg} alt='person accepting a package from a local business' />
			</div>
		</div>
	</>
);

export default Home;
