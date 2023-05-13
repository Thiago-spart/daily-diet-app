import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	padding: 24px;
`;

export const ButtonLabel = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};
		font-weight: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
	`}
	margin-top: 40px;
	margin-bottom: 8px;
`;

export const ListEmptyContent = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const GradientBackground = styled(LinearGradient)`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 160px;
`;

export const BottomBlurView = styled.View`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 160px;
	background-color: transparent;
	background: transparent;
`;

export const SectionHeaderTitle = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};
		font-weight: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.LG}px;
	`}

	margin-bottom: 12px;
`;

export const ListItemView = styled.View`
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-radius: 6px;
	padding: 14px 16px 14px 12px;
	gap: 12px;
	margin-bottom: 12px;
`;

export const ListItemTextView = styled.View`
	flex-direction: row;
`;

export const ListItemTime = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};
		font-weight: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.XS}px;
		border-right-color: ${theme.COLORS.GRAY_500};
	`}

	border-right-width: 1px;
	padding-right: 12px;
	margin-right: 12px;
`;

export const ListItemStatus = styled.View<{ isOnDiet: boolean }>`
	background: ${({ theme, isOnDiet }) =>
		isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

	width: 14px;
	height: 14px;
	border-radius: 7px;
`;
