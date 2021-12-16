import React from 'react';

// data
import businessesData from '../../data/businesses';

// interface BusinessesProps {}

const Businesses = () => {
	// dynamic, duplicate-free list of all business categories
	const categories = Array.from(new Set(businessesData.map((business) => business.category)));

	return (
		<div className='wrapper'>
			<div className='filter'>
				<span>Filter by Category:</span>
				<ul className='filter-list'>
					{categories.map((category) => (
						<li key={category} className='filter-item'>
							<label htmlFor={`Category Filter ${category}`}>
								<input type='checkbox' name='' id={`Category Filter ${category}`} />
								{category}
							</label>
						</li>
					))}
				</ul>
			</div>
			<ul>
				{businessesData.map((business) => (
					<li key={business.name}>{business.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Businesses;
