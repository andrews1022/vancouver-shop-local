import styled from 'styled-components';

const FiftyFiftyWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2.5% ${({ theme }) => theme.spacing.leftRightDesktop};
`;

export default FiftyFiftyWrapper;
