import { ViewProps } from "react-native"

export type Status = "below" | "above" 

export interface StatusViewProps extends ViewProps {
	status: Status
}