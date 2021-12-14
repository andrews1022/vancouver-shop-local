import React from 'react';

// data
import businessesData from '../../data/businesses';

interface BusinessesProps {}

const Businesses = (props: BusinessesProps) => (
	<div>
		<ul>
			{businessesData.map((business) => (
				<li key={business.name}>{business.name}</li>
			))}
		</ul>
	</div>
);

export default Businesses;
