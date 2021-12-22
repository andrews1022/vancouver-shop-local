import React, { useState } from 'react';

// styled components
import { Check, Label, Wrapper } from './styles';

interface FilterItemProps {
	category: string;
	// eslint-disable-next-line no-unused-vars
	setFilters: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const FilterItem = ({ category, setFilters }: FilterItemProps) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<Wrapper>
			<Label htmlFor={`Category Filter ${category}`} isChecked={isChecked}>
				<Check
					id={`Category Filter ${category}`}
					onClick={(e) => {
						setFilters(e);
						setIsChecked((prevState) => !prevState);
					}}
					type='checkbox'
					value={category}
				/>
				{category}
			</Label>
		</Wrapper>
	);
};

export default FilterItem;
