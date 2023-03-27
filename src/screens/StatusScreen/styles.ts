import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

import { Card } from "@components/Card";

export const Container = styled(SafeAreaView)`
	flex: 1;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const GeneralStaticsView = styled.View`
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	padding: 33px 24px;
	align-items: center;
	justify-content: flex-start;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	min-height: 80%;
	width: 100%;
`;

export const GeneralStaticsTitle = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};
		font-weight: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.SM}px;
	`}

	margin-bottom: 13px;
`;

export const RegisterMealsContains = styled(Card)`
	margin-top: 12px;
`;

export const CardContainer = styled.View`
	margin-top: 12px;
	align-items: center;
	width: 100%;
	flex-direction: row;
`;

export const CustomWidthCard = styled(Card)`
	width: 47%;
`;
