import { TouchableHighlight } from "react-native";
import styled, { css } from "styled-components/native";
import { ButtonTypeStyleProps, StyleButtonProps } from "./types";
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(TouchableHighlight)<StyleButtonProps>`
	flex: 1;


	min-height: 48px;
	max-height: 48px;

	background-color: ${({ theme, type }) => type === "PRIMARY" 
		? theme.COLORS.GRAY_200
		: theme.COLORS.GRAY_700
	};

	border: 1px solid;
	border-color: ${({ theme, type }) => type === "PRIMARY" 
		? theme.COLORS.GRAY_200
		: theme.COLORS.GRAY_100
	};
	border-radius: 6px;

	justify-content: center;
	align-items: center;
	flex-direction: row;
`;

export const Icon = styled(MaterialIcons).attrs<StyleButtonProps>(({ theme, type }) => ({
	size: 18,
	color: type === "PRIMARY" 
		? theme.COLORS.WHITE
		: theme.COLORS.GRAY_100,
}))`
	margin-right: 12px;
`;

export const Title = styled.Text<{ type: ButtonTypeStyleProps }>`
	${({ theme, type }) => css`
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
		font-family: ${theme.FONT_FAMILY.BOLD};
	`}
`;