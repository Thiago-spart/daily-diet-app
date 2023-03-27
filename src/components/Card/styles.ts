import styled, { css } from "styled-components/native";

import * as StyledTheme from "@theme/index";

import type { CardStyleProps } from "./types";

const themeVariations: Record<CardStyleProps["schema"], string> = {
	gray: StyledTheme.default.COLORS.GRAY_600,
	green: StyledTheme.default.COLORS.GREEN_LIGHT,
	red: StyledTheme.default.COLORS.RED_LIGHT,
};

export const Container = styled.View<CardStyleProps>`
	background-color: ${({ schema }) =>
		schema ? themeVariations[schema] : themeVariations.gray};
	width: 100%;
	position: relative;

	align-items: center;
	justify-content: center;
	gap: 2px;

	border-radius: 8px;
	padding: 20px 16px;
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
		text-align: center;
	`}
`;
