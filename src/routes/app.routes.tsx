import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
	const { COLORS } = useTheme()
	
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen 
					name="groups"
					component={Home}
				/>
			</Navigator>
		</View>
	)
}
