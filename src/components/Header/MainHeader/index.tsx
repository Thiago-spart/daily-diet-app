import logoImg from "@assets/logo.png";
import userPhotoImg from "@assets/user-photo.png";

import * as S from "./styles";

export const MainHeader: React.FC = () => {
	return (
		<S.Container>
			<S.Logo source={logoImg} />

			<S.UserPhoto source={userPhotoImg} />
		</S.Container>
	);
};
