import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

export const StatusHeader: React.FC = () => {
	const navigate = useNavigation();

	const goBack = () => {
		navigate.goBack();
	};

	return (
		<S.Container>
			<S.GoBackTouchableOpacity onPress={goBack}>
				<S.GoBackIcon />
			</S.GoBackTouchableOpacity>
			<S.Title>90,86%</S.Title>
			<S.Subtitle>das refeições dentro da dieta</S.Subtitle>
		</S.Container>
	);
};
