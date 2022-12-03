import { TouchableHighlightProps } from "react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "OUTLINED";

export interface StyleButtonProps {
	type: ButtonTypeStyleProps;
}

export interface ButtonProps extends TouchableHighlightProps {
	type?: ButtonTypeStyleProps;
	title: string;
}
