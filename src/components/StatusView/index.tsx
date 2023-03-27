import { useTheme } from "styled-components/native";

import type { StatusViewProps } from "./types";

import * as S from "./styles";

export const StatusView: React.FC<StatusViewProps> = ({ status, ...rest }) => {
	const theme = useTheme();

	return (
		<S.Container status={status} {...rest}>
			<S.Icon
				color={
					status === "above" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
				}
			/>

			<S.PercentageText>90,86%</S.PercentageText>

			<S.Subtitle>das refeições dentro da dieta</S.Subtitle>
		</S.Container>
	);
};
