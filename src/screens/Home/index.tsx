import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { MainHeader } from "@components/Header/MainHeader";
import { StatusView } from "@components/StatusView";

import * as S from "./styles";

export const Home: React.FC = () => {
	const navigation = useNavigation();

	const handleNewGroup = () => {
		navigation.navigate("status");
	};

	return (
		<S.Container>
			<MainHeader />

			<TouchableOpacity onPress={handleNewGroup}>
				<StatusView status="below" />
			</TouchableOpacity>
		</S.Container>
	);
};
