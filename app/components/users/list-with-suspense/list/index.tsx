export const UsersList = async ({ fetchUsers }) => {
	const users = await fetchUsers();

	return (
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
	);
};
