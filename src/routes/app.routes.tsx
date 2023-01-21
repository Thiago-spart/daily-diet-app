import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusScreen } from "@screens/StatusScreen";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
	const { COLORS } = useTheme()
	
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.GRAY_700 }}>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen 
					name="home"
					component={Home}
				/>

				<Screen
					name="status"
					component={StatusScreen}
				/>
			</Navigator>
		</View>
	)
}
