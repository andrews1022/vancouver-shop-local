import React, { useReducer, useRef } from 'react';

// components
import BusinessesItem from '../BusinessesItem';
import FilterItem from '../FilterItem';

// data
import businessesData from '../../data/businesses';

// types
import type { InputChangeEvent } from '../../types/types';

// reducer
import { businessesReducer, initialState } from './reducer';

// styled components
import * as S from './styles';

const Businesses = () => {
	const businessesWrapperRef = useRef<HTMLDivElement>(null);

	// reducer state
	const [state, dispatch] = useReducer(businessesReducer, initialState);

	// dynamic, duplicate-free list of all business categories
	const categories = Array.from(new Set(businessesData.map((business) => business.category)));

	// set filters fn
	const setFilters = (event: InputChangeEvent) => {
		const { value } = event.currentTarget;
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
		<S.Wrapper>
			<S.FilterWrapper>
				<S.FilterHeading>Filter by Category:</S.FilterHeading>
				<S.FilterList>
					{categories.map((category) => (
						<FilterItem key={category} category={category} setFilters={setFilters} />
					))}
				</S.FilterList>
			</S.FilterWrapper>

			<S.BusinessesWrapper ref={businessesWrapperRef}>
				<S.BusinessesList>
					{state.businesses.map((business) => (
						<BusinessesItem key={business.name} business={business} />
					))}
				</S.BusinessesList>
			</S.BusinessesWrapper>
		</S.Wrapper>
	);
};

export default Businesses;
