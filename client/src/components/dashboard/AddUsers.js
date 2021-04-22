// dependencies
import React from 'react';
// components
import AddUserForm from '../forms/AddUserForm';
import UserListTile from './UserListTile';
import Button from '../forms/formItems/Button';
// seedData
import { userData } from '../../seedData';

const AddUsers = () => {
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

	return (
		<div className='add-block'>
			<AddUserForm />
			<div className='user-list-block'>
				{userData.map((item) => {
					return (
						<UserListTile
							key={item.id}
							{...item}
							handleEdit={handleEdit}
							handleDelete={handleDelete}
						/>
					);
				})}
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
