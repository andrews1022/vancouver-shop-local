// next
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
	<>
		<h1>
			Welcome to <a href='https://nextjs.org'>Next.js!</a>
		</h1>

		<p>
			<Link href='/about'>Go To About Page</Link>
		</p>

		<p>
			<Link href='/contact'>Go To Contact Page</Link>
		</p>

		<div>
			<a href='https://nextjs.org/docs'>
				<h2>Documentation &rarr;</h2>
				<p>Find in-depth information about Next.js features and API.</p>
			</a>

			<a href='https://nextjs.org/learn'>
				<h2>Learn &rarr;</h2>
				<p>Learn about Next.js in an interactive course with quizzes!</p>
			</a>

			<a href='https://github.com/vercel/next.js/tree/master/examples'>
				<h2>Examples &rarr;</h2>
				<p>Discover and deploy boilerplate example Next.js projects.</p>
			</a>

			<a href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
				<h2>Deploy &rarr;</h2>
				<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
			</a>
		</div>
	</>
);

export default Home;
