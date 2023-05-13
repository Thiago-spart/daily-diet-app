/* eslint-disable arrow-parens */
/* eslint-disable prettier/prettier */
import { useNavigation } from "@react-navigation/native";
import { SectionList, Text, TouchableOpacity } from "react-native";

import { Button } from "@components/Button";
import { MainHeader } from "@components/Header/MainHeader";
import { StatusView } from "@components/StatusView";

import { formatDate } from "@utils/formatDate";

import * as S from "./styles";

const mockedData = [
	{
		title: new Date(),
		data: [
			{
				name: "X-tudo",
				isOnDiet: false,
				hour: "20:00",
				id: "1",
			},
			{
				name: "Sanduíche",
				isOnDiet: true,
				hour: "16:00",
				id: "2",
			},
			{
				name: "Lasanha de frango com queijo",
				isOnDiet: false,
				hour: "12:30",
				id: "3",
			},
			{
				name: "Torta de chocolate",
				isOnDiet: false,
				hour: "09:30",
				id: "4",
			},
		],
	},
	{
		title: new Date(),
		data: [
			{
				name: "X-tudo",
				isOnDiet: false,
				hour: "20:00",
				id: "5",
			},
			{
				name: "Whey protein com leite",
				isOnDiet: true,
				hour: "16:00",
				id: "6",
			},
			{
				name: "Lasanha de frango com queijo",
				isOnDiet: false,
				hour: "12:30",
				id: "7",
			},
			{
				name: "Torta de chocolate",
				isOnDiet: false,
				hour: "09:30",
				id: "8",
			},
		],
	},
];

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

			<S.ButtonLabel>Refeições</S.ButtonLabel>

			<Button
				icon="add"
				title="Nova refeição"
				activeOpacity={0.8}
				style={{ marginBottom: 60 }}
			/>

			<SectionList
				sections={mockedData}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<S.ListItemView>
						<S.ListItemTextView>
							<S.ListItemTime>20:00</S.ListItemTime>

							<Text>{item.name}</Text>
						</S.ListItemTextView>

						<S.ListItemStatus isOnDiet={item.isOnDiet} />
					</S.ListItemView>
				)}
				renderSectionHeader={({ section }) => (
					<S.SectionHeaderTitle>
						{formatDate(section.title)}
					</S.SectionHeaderTitle>
				)}
				contentContainerStyle={
					mockedData.length === 0 && { flex: 1, justifyContent: "center" }
				}
				ListFooterComponent={() => (
					<S.BottomBlurView>
						<S.GradientBackground
							colors={["rgba(250, 250, 250, 0)", "#FAFAFA"]}
						/>
					</S.BottomBlurView>
				)}
				ListEmptyComponent={() => (
					<S.ListEmptyContent>
						<Text>
							Não há exercícios registrados ainda. {"\n"}
							Vamos fazer exercícios hoje?
						</Text>
					</S.ListEmptyContent>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</S.Container>
	);
};
