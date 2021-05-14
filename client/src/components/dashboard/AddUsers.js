// dependencies
import React from 'react';
// components
import AddUserForm from '../forms/AddUserForm';
import UserListTile from './UserListTile';
import Button from '../forms/formItems/Button';
import Loading from '../loading/Loading';
// utils
import { useGlobalContext } from '../../utils/AppContext';
// seedData
import { userData } from '../../seedData';

const AddUsers = () => {
	const { isLoading, users } = useGlobalContext();

	const handleClick = (e) => {
		e.preventDefault();
		console.log('Load More Users Btn Clicked');
	};

	const handleEdit = (id) => {
		console.log(`Edit Btn Clicked, id: ${id}`);
	};

	const handleDelete = (id) => {
		console.log(`Delete Btn Clicked, id: ${id}`);
	};

	if (isLoading) {
		return (
			<div className='add-block'>
				<AddUserForm />
				<div className='list-block'>
					<Loading color='loading-white' />
					<Button
						type='button'
						className='load-more-btn'
						onClick={handleClick}
						text='Load More'
					/>
				</div>
			</div>
		);
	}

	if (!users) {
		return (
			<div className='add-block'>
				<AddUserForm />
				<div className='list-block'>
					<h3 className='dashboard-default'>No User Accounts</h3>
					<Button
						type='button'
						className='load-more-btn'
						onClick={handleClick}
						text='Load More'
					/>
				</div>
			</div>
		);
	}

	return (
		<div className='add-block'>
			<AddUserForm />
			<div className='list-block'>
				{userData.length < 1 ? (
					<h3 className='dashboard-default'>No User Accounts</h3>
				) : (
					userData.map((item) => {
						return (
							<UserListTile
								key={item.id}
								{...item}
								handleEdit={handleEdit}
								handleDelete={handleDelete}
							/>
						);
					})
				)}
				<Button
					type='button'
					className='load-more-btn'
					onClick={handleClick}
					text='Load More'
				/>
			</div>
		</div>
	);
};

export default AddUsers;
