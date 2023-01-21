import styled, { css } from "styled-components/native";

import type { Schema } from "./types";

export const Container = styled.View<{ schema: Schema }>`
	background-color: ${({ theme, schema }) =>
		schema === "green" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const Subtitle = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_200};
		font-weight: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.SM}px;
	`}
`;
