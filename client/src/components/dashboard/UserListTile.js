// dependencies
import React from 'react';

const UserListTile = ({
	id,
	fullName,
	email,
	role,
	handleEdit,
	handleDelete
}) => {
	return (
		<div className='tile'>
			<div className='info'>
				<h3 className='tile-title'>{fullName}</h3>
				<p className='tile-role'>{role}</p>
				<p>{email}</p>
			</div>
			<div className='tile-icons'>
				<i className='far fa-edit icon' onClick={() => handleEdit(id)}></i>
				<i
					className='far fa-trash-alt icon'
					onClick={() => handleDelete(id)}
				></i>
			</div>
		</div>
	);
};

export default UserListTile;
