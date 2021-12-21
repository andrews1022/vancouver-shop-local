// data
import businessesData from '../../data/businesses';

// types
import { Business } from '../../types/types';

// reducer type
interface InitialBusinessesState {
	businesses: Business[];
	filters: string[];
}

export const initialState: InitialBusinessesState = {
	businesses: businessesData,
	filters: []
};

type BusinessActions =
	| { type: 'REMOVE_FILTER'; payload: string }
	| { type: 'RENDER_BUSINESSES' }
	| { type: 'RESET_BUSINESSES' }
	| { type: 'SET_FILTERS'; payload: string };

const getFilteredBusinesses = (filters: string[]): Business[] => {
	if (!filters.length) {
		return businessesData;
	}

	return businessesData.filter((business) => filters.includes(business.category));
};

export const businessesReducer = (
	state: InitialBusinessesState = initialState,
	action: BusinessActions
) => {
	switch (action.type) {
		case 'REMOVE_FILTER': {
			return {
				...state,
				filters: state.filters.filter((filt) => filt !== action.payload)
			};
		}

		case 'RENDER_BUSINESSES': {
			return {
				...state,
				businesses: getFilteredBusinesses(state.filters)
			};
		}

		case 'RESET_BUSINESSES': {
			return initialState;
		}

		case 'SET_FILTERS': {
			return {
				...state,
				filters: [...state.filters, action.payload]
			};
		}

		default: {
			return state;
		}
	}
};
