import { ButtonIcon } from "@components/ButtonIcon"
import { useTheme } from "styled-components/native"
import * as S from "./styles"
import { StatusViewProps } from "./types"

export const StatusView: React.FC<StatusViewProps> = ({ status }) => {
	const theme = useTheme()
	
	return (
		<S.Container status={status}>
			<S.Icon color={status === "above" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK} />
			
			<S.PercentageText>
				90,86%
			</S.PercentageText>

			<S.Subtitle>
				das refeições dentro da dieta
			</S.Subtitle>
		</S.Container>
	)
}