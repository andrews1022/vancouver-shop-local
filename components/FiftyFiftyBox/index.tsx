import React from 'react';

// types
import { Children } from '../../types/types';

// styled components
import FiftyFiftyBoxWrapper from './styles';

interface FiftyFiftyBoxProps {
	children: Children;
	isFirstOnMobile?: boolean | undefined;
}

const FiftyFiftyBox = ({ children, isFirstOnMobile }: FiftyFiftyBoxProps) => (
	<FiftyFiftyBoxWrapper isFirstOnMobile={isFirstOnMobile}>{children}</FiftyFiftyBoxWrapper>
);

export default FiftyFiftyBox;
