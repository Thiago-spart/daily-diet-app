import { Button } from "@components/Button"
import { Header } from "@components/Header"
import { StatusView } from "@components/StatusView"
import { Text } from "react-native"

import * as S from "./styles"

export const Home: React.FC = () => {
	return (
		<S.Container>
			<Header />
			
			<StatusView status="below" />
    </S.Container>
	)
}