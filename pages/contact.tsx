import type { NextPage } from 'next';
import Image from 'next/image';

// images
import ContactImg from '../public/images/contact.jpg';

const Contact: NextPage = () => (
	<>
		<div className='fifty-fifty'>
			<div className='fifty-fifty-box'>
				<Image src={ContactImg} alt='person accepting a package from a local business' />
			</div>
			<div className='fifty-fifty-box'>
				<h1>Contact</h1>
				<p>
					For all contact related details, please see the post on the{' '}
					<a
						href='https://www.reddit.com/r/vancouver/comments/qfxtlw/rvancouver_shop_local_holiday_guide_2021/'
						target='_blank'
						rel='noopener noreferrer'
					>
						subreddit
					</a>
					.
				</p>
			</div>
		</div>
	</>
);

export default Contact;
