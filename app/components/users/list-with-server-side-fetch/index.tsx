export const ListWithServerSideFetch = ({ users }) => {
	return (
		<section className={'border-2 p-10 rounded-md bg-red-100'}>
			<h1 className={'text-lg text-center'}>
				Lista de usuários com fetch no server:
			</h1>

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
		</section>
	);
};
