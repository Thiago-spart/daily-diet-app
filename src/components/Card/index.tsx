import type { CardProps } from "./types";

import * as S from "./styles";

export const Card: React.FC<CardProps> = ({
	schema = "gray",
	subtitle,
	title,
	...rest
}) => {
	return (
		<S.Container schema={schema} {...rest}>
			<S.Title>{title}</S.Title>

			<S.Subtitle>{subtitle}</S.Subtitle>
		</S.Container>
	);
};
