import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
			<h1 className={'text-4xl font-bold text-green-300 mb-5'}>
				Clica em um link aí 👇
			</h1>

			<Link href={'suspense-api'} className={'text-blue-500'}>
				Suspense API
			</Link>
		</main>
	);
}
