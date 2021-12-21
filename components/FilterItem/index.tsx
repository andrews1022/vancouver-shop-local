import React, { useState } from 'react';

// styled components
import { FilterCheck, FilterItemWrapper, FilterLabel } from './styles';

interface FilterItemProps {
	category: string;
	// eslint-disable-next-line no-unused-vars
	setFilters: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const FilterItem = ({ category, setFilters }: FilterItemProps) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<FilterItemWrapper key={category}>
			<FilterLabel htmlFor={`Category Filter ${category}`} isChecked={isChecked}>
				<FilterCheck
					id={`Category Filter ${category}`}
					onClick={(e) => {
						setFilters(e);
						setIsChecked((prevState) => !prevState);
					}}
					type='checkbox'
					value={category}
				/>
				{category}
			</FilterLabel>
		</FilterItemWrapper>
	);
};

export default FilterItem;
