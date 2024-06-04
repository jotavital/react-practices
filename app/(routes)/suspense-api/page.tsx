import { UsersListWithoutSuspense } from '@/app/components/users/list-without-suspense';
import { UsersListWithSuspense } from '@/app/components/users/list-with-suspense';
import { ListWithServerSideFetch } from '@/app/components/users/list-with-server-side-fetch';

async function getUsers() {
	return await new Promise<any>((resolve, reject) => {
		fetch(`https://jsonplaceholder.typicode.com/users`).then((res) =>
			res.json().then((data) => {
				setTimeout(() => {
					resolve(data);
				}, 2000);
			}),
		);
	});
}

export default async function SuspenseApiPage() {
	const users = await getUsers();

	return (
		<main className='flex flex-col items-center min-h-screen p-24'>
			<h1 className={'text-xl mb-3'}>Usando a suspense API do React!</h1>

			<div className='flex gap-5'>
				<UsersListWithoutSuspense />

				<UsersListWithSuspense />

				<ListWithServerSideFetch users={users} />
			</div>
		</main>
	);
}
