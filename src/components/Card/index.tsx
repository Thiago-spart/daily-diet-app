import type { CardProps } from "./types";

import * as S from "./styles";

export const Card: React.FC<CardProps> = ({ schema = "gray", ...rest }) => {
	return (
		<S.Container schema={schema} {...rest}>
			<S.PercentageText>90,86%</S.PercentageText>

			<S.Subtitle>das refeições dentro da dieta</S.Subtitle>
		</S.Container>
	);
};
