import { UsersList } from '@/app/components/users/list-with-suspense/list';
import { Spinner } from '@/app/components/spinner';
import { Suspense } from 'react';

export const UsersListWithSuspense: React.FC = () => {
	const fetchUsers = async () => {
		return new Promise<any>((resolve, reject) => {
			fetch(`https://jsonplaceholder.typicode.com/users`).then((res) =>
				res.json().then((data) => {
					setTimeout(() => {
						resolve(data);
					}, 2000);
				}),
			);
		});
	};

	return (
		<section className={'border-2 p-10 rounded-md bg-amber-100'}>
			<h1 className={'text-lg text-center'}>
				Lista de usuários COM a suspense:
			</h1>

			<Suspense
				fallback={
					<div className={'flex justify-center py-10'}>
						<Spinner />
					</div>
				}
			>
				<UsersList fetchUsers={fetchUsers} />
			</Suspense>
		</section>
	);
};
