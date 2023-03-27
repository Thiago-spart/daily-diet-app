import { Card } from "@components/Card";
import { StatusHeader } from "@components/Header/StatusHeader";

import * as S from "./styles";

export const StatusScreen: React.FC = () => {
	return (
		<S.Container>
			<StatusHeader />

			<S.GeneralStaticsView>
				<S.GeneralStaticsTitle>Estatísticas gerais</S.GeneralStaticsTitle>

				<Card
					schema="gray"
					title="22"
					subtitle="melhor sequência de pratos dentro da dieta"
				/>

				<S.RegisterMealsContains
					schema="gray"
					title="109"
					subtitle="refeições registradas"
				/>

				<S.CardContainer>
					<S.CustomWidthCard
						schema="green"
						title="99"
						subtitle="refeições dentro da dieta"
						style={{ marginRight: 20 }}
					/>
					<S.CustomWidthCard
						schema="red"
						title="10"
						subtitle="refeições fora da dieta"
					/>
				</S.CardContainer>
			</S.GeneralStaticsView>
		</S.Container>
	);
};
