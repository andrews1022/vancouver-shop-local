import React from 'react';

// types
import { Children } from '../../types/types';

// styled components
import FiftyFiftyWrapper from './styles';

interface FiftyFiftyProps {
	children: Children;
}

const FiftyFifty = ({ children }: FiftyFiftyProps) => (
	<FiftyFiftyWrapper>{children}</FiftyFiftyWrapper>
);

export default FiftyFifty;
