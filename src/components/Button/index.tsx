import * as S from "./styles"
import { ButtonProps } from "./types"

export const Button: React.FC<ButtonProps> = ({ title, type = "PRIMARY", icon, ...rest }) => {
	return (
		<S.Container type={type} {...rest}>
			<>
				{icon && <S.Icon type={type} name={icon} />}
				
				<S.Title type={type}>{title}</S.Title>
			</>
		</S.Container>
	)
}