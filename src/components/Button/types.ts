import { MaterialIcons } from "@expo/vector-icons"

import { TouchableHighlightProps } from "react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "OUTLINED";

export interface StyleButtonProps {
	type: ButtonTypeStyleProps;
}

export interface ButtonProps extends TouchableHighlightProps {
	type?: ButtonTypeStyleProps;
	title: string;
	icon?: keyof typeof MaterialIcons.glyphMap;
}
