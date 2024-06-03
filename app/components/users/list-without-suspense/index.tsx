'use client';

import { Spinner } from '@/app/components/spinner';
import { useEffect, useState } from 'react';

export const UsersListWithoutSuspense: React.FC = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchUsers = async () => {
		setIsLoading(true);

		return new Promise<any>((resolve, reject) => {
			fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
				res.json().then((data) => {
					setTimeout(() => {
						setIsLoading(false);

						resolve(data);
					}, 2000);
				}),
			);
		});
	};

	useEffect(() => {
		fetchUsers().then((users) => setUsers(users));
	}, []);

	return (
		<section className={'border-2 p-10 rounded-md bg-red-100'}>
			<h1 className={'text-lg text-center'}>
				Lista de usuários SEM a suspense:
			</h1>

			{isLoading ? (
				<div className={'flex justify-center py-10'}>
					<Spinner />
				</div>
			) : (
				<div className={'flex flex-col py-5'}>
					{users.map((user) => {
						return (
							<div key={user.id} className={'mb-2'}>
								<p>
									<strong>Nome:</strong> {user.name}
								</p>
							</div>
						);
					})}
				</div>
			)}
		</section>
	);
};
