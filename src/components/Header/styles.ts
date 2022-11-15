import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native"
import Animated from "react-native-reanimated";

export const Container = styled(Animated.View)`
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.Image`
	width: 82px;
	height: 37px;
`;

export const UserPhoto = styled.Image`
	width: 40px;
	height: 40px;
	border-radius: 20px;
`;
