import { ArrowUpRight } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

import type { Status } from "./types";

export const Container = styled.View<{ status: Status }>`
	background-color: ${({ theme, status }) =>
		status === "above" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
	margin-top: 32px;

	position: relative;

	align-items: center;
	justify-content: center;
	gap: 2px;

	border-radius: 8px;
	padding: 20px 16px;
`;

export const PercentageText = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};
		font-weight: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.XXL}px;
	`}
`;

export const Icon = styled(ArrowUpRight).attrs(() => ({
	size: 32,
	weight: "fill",
}))`
	position: absolute;
	top: 8px;
	right: 8px;
`;

export const Subtitle = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_200};
		font-weight: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.SM}px;
	`}
`;
