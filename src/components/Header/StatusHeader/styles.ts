import { ArrowLeft } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

export const Container = styled.View`
	position: relative;
	width: 100%;

	align-items: center;
	justify-content: center;
	gap: 2px;

	padding: 32px 16px;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};
		font-weight: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.XXL}px;
	`}
`;

export const Subtitle = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_200};
		font-weight: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.SM}px;
	`}
`;

export const GoBackTouchableOpacity = styled.TouchableOpacity`
	position: absolute;
	top: 8px;
	left: 24px;
`;

export const GoBackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
	size: 32,
	weight: "fill",
	color: theme.COLORS.GREEN_DARK,
}))``;
