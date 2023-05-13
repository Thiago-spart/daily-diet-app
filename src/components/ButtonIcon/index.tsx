import type { ButtonProps } from "./types";

import * as S from "./styles";

export const ButtonIcon: React.FC<ButtonProps> = ({
	type = "PRIMARY",
	icon,
	...rest
}) => {
	return (
		<S.Container {...rest}>
			<S.Icon type={type} name={icon} />
		</S.Container>
	);
};
