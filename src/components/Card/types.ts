import type { ViewProps } from "react-native";

export type Schema = "gray" | "green" | "red";

export interface CardProps extends ViewProps {
	schema?: Schema;
}

export type StyleButtonProps = Pick<CardProps, "schema">;
