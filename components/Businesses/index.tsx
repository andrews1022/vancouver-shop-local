import React, { useReducer, useRef } from 'react';

// components
import BusinessesItem from '../BusinessesItem';
import FilterItem from '../FilterItem';

// data
import businessesData from '../../data/businesses';

// reducer
import { businessesReducer, initialState } from './reducer';

// styled components
import {
	BusinessesList,
	BusinessesWrapper,
	FilterHeading,
	FilterList,
	FilterWrapper,
	Wrapper
} from './styles';

// components

const Businesses = () => {
	const businessesWrapperRef = useRef<HTMLDivElement>(null);

	// reducer state
	const [state, dispatch] = useReducer(businessesReducer, initialState);

	// dynamic, duplicate-free list of all business categories
	const categories = Array.from(new Set(businessesData.map((business) => business.category)));

	// set filters fn
	const setFilters = (event: React.MouseEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget as HTMLInputElement;

		const { innerWidth } = window;

		if (innerWidth <= 480) {
			// scroll cards into view
			businessesWrapperRef.current?.scrollIntoView({ behavior: 'smooth' });
		}

		// if state is now empty as result of unchecking all boxes
		if (!state.filters.length) {
			dispatch({ type: 'RESET_BUSINESSES' });
		}

		// if user clicks on a currently active department filter
		if (state.filters.includes(value)) {
			const matchingIndex = state.filters.indexOf(value);

			// remove it, and filter businesses accordingly
			if (matchingIndex > -1) {
				dispatch({ type: 'REMOVE_FILTER', payload: value });
				dispatch({ type: 'RENDER_BUSINESSES' });
			}

			return;
		}

		// if user clicks on a department filter not in use,
		// add to list of filters and filter businesses accordingly
		dispatch({ type: 'SET_FILTERS', payload: value });
		dispatch({ type: 'RENDER_BUSINESSES' });
	};

	return (
		<Wrapper>
			<FilterWrapper>
				<FilterHeading>Filter by Category:</FilterHeading>
				<FilterList>
					{categories.map((category) => (
						<FilterItem key={category} category={category} setFilters={setFilters} />
					))}
				</FilterList>
			</FilterWrapper>

			<BusinessesWrapper ref={businessesWrapperRef}>
				<BusinessesList>
					{state.businesses.map(({ category, description, link, location, name }) => (
						<BusinessesItem
							key={name}
							category={category}
							description={description}
							link={link}
							location={location}
							name={name}
						/>
					))}
				</BusinessesList>
			</BusinessesWrapper>
		</Wrapper>
	);
};

export default Businesses;
