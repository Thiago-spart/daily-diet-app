/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";

import {
	useFonts,
	NunitoSans_400Regular,
	NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { Routes } from "@routes/index";
import { queryClient } from "@services/queryClient";
import theme from "@theme/index";

import { Loading } from "@components/Loading";

export default function App() {
	const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<StatusBar
					barStyle="dark-content"
					backgroundColor="transparent"
					translucent
				/>
				{fontsLoaded ? <Routes /> : <Loading />}
			</ThemeProvider>
		</QueryClientProvider>
	);
}
