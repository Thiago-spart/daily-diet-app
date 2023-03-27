import type { ViewProps } from "react-native";

export type Schema = "gray" | "green" | "red";

export interface CardProps extends ViewProps {
	schema: Schema;
	title: string;
	subtitle: string;
}

export type CardStyleProps = Omit<CardProps, "subtitle" | "title">;

export type StyleButtonProps = Pick<CardProps, "schema">;
