import type { TouchableOpacityProps } from "react-native";

import type { MaterialIcons } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "OUTLINED" | "PRIMARY";

export interface StyleButtonProps {
	type: ButtonTypeStyleProps;
}

export interface ButtonProps extends TouchableOpacityProps {
	type?: ButtonTypeStyleProps;
	title: string;
	icon?: keyof typeof MaterialIcons.glyphMap;
}
