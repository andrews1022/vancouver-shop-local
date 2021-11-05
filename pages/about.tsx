import type { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => (
	<div>
		<h1>Hello from the About page!</h1>
		<Link href='/'>Go To Home Page</Link>
	</div>
);

export default About;
