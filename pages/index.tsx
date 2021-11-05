// next
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
	<>
		<h1>Hello from the Home page!</h1>

		<p>
			<Link href='/about'>Go To About Page</Link>
		</p>
		<p>
			<Link href='/contact'>Go To Contact Page</Link>
		</p>
	</>
);

export default Home;
