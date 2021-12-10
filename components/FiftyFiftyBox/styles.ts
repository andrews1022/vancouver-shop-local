import styled from 'styled-components';

interface FiftyFiftyBoxWrapperProps {
	isFirstOnMobile: boolean | undefined;
}

const FiftyFiftyBoxWrapper = styled.div<FiftyFiftyBoxWrapperProps>`
	background-color: ${(props) => (props.isFirstOnMobile ? 'lightgreen' : 'lightcoral')};
	padding: 1rem;
`;

export default FiftyFiftyBoxWrapper;
