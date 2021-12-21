import styled from 'styled-components';

const LayoutWrapper = styled.div`
	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
`;

export default LayoutWrapper;
