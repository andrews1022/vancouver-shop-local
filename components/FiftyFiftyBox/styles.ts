import styled from 'styled-components';

interface FiftyFiftyBoxWrapperProps {
	isFirstOnMobile: boolean | undefined;
}

const FiftyFiftyBoxWrapper = styled.div<FiftyFiftyBoxWrapperProps>`
	flex: 0 0 48%;

	a {
		color: ${({ theme }) => theme.colors.bahamaBlue};
		font-weight: 600;
	}
`;

export default FiftyFiftyBoxWrapper;

// @media ${({ theme }) => theme.mediaQueries.tabletMedium} {
// 	padding: 0 ${({ theme }) => theme.spacing.mobile};
// }
