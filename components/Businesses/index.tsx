import React, { useReducer } from 'react';

// data
import businessesData from '../../data/businesses';

// styled components
import {
	BusinessesWrapper,
	FilterWrapper,
	FilterHeading,
	FilterItem,
	FilterList,
	Wrapper,
	FilterCheck,
	FilterLabel,
	BusinessesCategory,
	BusinessesDescription,
	BusinessesHeading,
	BusinessesItem,
	BusinessesLink,
	BusinessesList
} from './styles';

// reducer
import { businessesReducer, initialState } from './reducer';

// props
// interface BusinessesProps {}

const Businesses = () => {
	// reducer state
	const [state, dispatch] = useReducer(businessesReducer, initialState);

	// dynamic, duplicate-free list of all business categories
	const categories = Array.from(new Set(businessesData.map((business) => business.category)));

	// set filters fn
	const setFilters = (event: React.MouseEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget as HTMLInputElement;

		// if state is now empty as result of unchecking all boxes
		if (!state.filters.length) {
			dispatch({ type: 'RESET_BUSINESSES' });
		}

		// if user clicks on a currently active department filter
		if (state.filters.includes(value)) {
			const matchingIndex = state.filters.indexOf(value);

			// remove it, and filter posts accordingly
			if (matchingIndex > -1) {
				dispatch({ type: 'REMOVE_FILTER', payload: value });
				dispatch({ type: 'RENDER_BUSINESSES' });
			}

			return;
		}

		// if user clicks on a department filter not in use,
		// add to list of filters and filter posts accordingly
		dispatch({ type: 'SET_FILTERS', payload: value });
		dispatch({ type: 'RENDER_BUSINESSES' });
	};

	return (
		<Wrapper>
			<FilterWrapper>
				<FilterHeading>Filter by Category:</FilterHeading>
				<FilterList>
					{categories.map((category) => (
						<FilterItem key={category}>
							<FilterLabel htmlFor={`Category Filter ${category}`}>
								<FilterCheck
									id={`Category Filter ${category}`}
									onClick={setFilters}
									type='checkbox'
									value={category}
								/>
								{category}
							</FilterLabel>
						</FilterItem>
					))}
				</FilterList>
			</FilterWrapper>

			<BusinessesWrapper>
				<BusinessesList>
					{state.businesses.map((business) => (
						<BusinessesItem key={business.name}>
							<BusinessesHeading>{business.name}</BusinessesHeading>
							<BusinessesDescription>{business.description}</BusinessesDescription>
							<BusinessesCategory>{business.category}</BusinessesCategory>
							<BusinessesLink href={business.link}>Visit Site</BusinessesLink>
						</BusinessesItem>
					))}
				</BusinessesList>
			</BusinessesWrapper>
		</Wrapper>
	);
};

export default Businesses;
