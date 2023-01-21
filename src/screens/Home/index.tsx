import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { Header } from "@components/Header";
import { StatusView } from "@components/StatusView";

import * as S from "./styles";

export const Home: React.FC = () => {
	const navigation = useNavigation();

	const handleNewGroup = () => {
		navigation.navigate("status");
	};

	return (
		<S.Container>
			<Header />

			<TouchableOpacity onPress={handleNewGroup}>
				<StatusView status="below" />
			</TouchableOpacity>
		</S.Container>
	);
};
