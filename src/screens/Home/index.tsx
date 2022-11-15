import { Header } from "@components/Header"
import { StatusBar, Text, View } from "react-native"

import * as S from "./styles"

export const Home: React.FC = () => {
	return (
		<S.Container>
			<Header />
			
      <Text>Open up App.tsx to start working on your app!</Text>
    </S.Container>
	)
}