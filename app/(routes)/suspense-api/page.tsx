import { UsersListWithoutSuspense } from '@/app/components/users/list-without-suspense';
import { UsersListWithSuspense } from '@/app/components/users/list-with-suspense';

export default function SuspenseApiPage() {
	return (
		<main className='flex flex-col items-center min-h-screen p-24'>
			<h1 className={'text-xl mb-3'}>Usando a suspense API do React!</h1>

			<div className='flex gap-5'>
				<UsersListWithoutSuspense />

				<UsersListWithSuspense />
			</div>
		</main>
	);
}
