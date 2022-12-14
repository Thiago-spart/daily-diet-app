import theme from '@theme/index';
import { StatusBar } from "react-native";
import { ThemeProvider } from 'styled-components/native';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans"
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@services/queryClient';

export default function App() {
  const [ fontsLoaded ] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

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
