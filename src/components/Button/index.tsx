import { TouchableOpacity } from "react-native";

import type { ButtonProps } from "./types";

import * as S from "./styles";

export const Button: React.FC<ButtonProps> = ({
	title,
	type = "PRIMARY",
	icon,
	...rest
}) => {
	return (
		<TouchableOpacity {...rest}>
			<S.Container type={type}>
				{icon && <S.Icon type={type} name={icon} />}

				<S.Title type={type}>{title}</S.Title>
			</S.Container>
		</TouchableOpacity>
	);
};
