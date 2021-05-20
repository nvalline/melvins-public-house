// dependencies
import React from 'react';
// components
import AddSpecialForm from '../forms/AddSpecialForm';
import SpecialListTile from './SpecialListTile';
import Button from '../forms/formItems/Button';
import Loading from '../loading/Loading';
// utils
import { useGlobalContext } from '../../utils/AppContext';
// seedData
// import { specialsData } from '../../seedData';

const AddSpecials = () => {
	const { isLoadingSpecials, specialData } = useGlobalContext();

	const handleClick = (e) => {
		e.preventDefault();
		console.log('Load More Specials Btn Clicked');
	};

	const handleEdit = (id) => {
		console.log(`Edit Btn Clicked, id: ${id}`);
	};

	const handleDelete = (id) => {
		console.log(`Delete Btn Clicked, id: ${id}`);
	};

	if (isLoadingSpecials) {
		return (
			<div className='add-block'>
				<AddSpecialForm />
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

	if (!specialData) {
		return (
			<div className='add-block'>
				<AddSpecialForm />
				<div className='list-block'>
					<h3 className='dashboard-default'>No Specials Scheduled</h3>
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
			<AddSpecialForm />
			<div className='list-block'>
				{specialData.length < 1 ? (
					<h3 className='dashboard-default'>No Specials Scheduled</h3>
				) : (
					specialData.map((item) => {
						return (
							<SpecialListTile
								key={item._id}
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

export default AddSpecials;
