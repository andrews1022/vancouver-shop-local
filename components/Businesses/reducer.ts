// data
import businessesData from '../../data/businesses';

// types
import type { Business } from '../../types/types';

// reducer types
type BusinessesState = {
  businesses: Business[];
  filters: string[];
};

type BusinessActions =
  | { type: 'REMOVE_FILTER'; payload: string }
  | { type: 'RENDER_BUSINESSES' }
  | { type: 'RESET_BUSINESSES' }
  | { type: 'SET_FILTERS'; payload: string };

export const initialState: BusinessesState = {
  businesses: businessesData,
  filters: []
};

export const businessesReducer = (
  state: BusinessesState = initialState,
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
        businesses: !state.filters.length
          ? businessesData
          : businessesData.filter((business) => state.filters.includes(business.category))
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
