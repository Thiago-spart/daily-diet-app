import * as S from "./styles"

import logoImg from "@assets/logo.png"
import userPhotoImg from "@assets/user-photo.png"


export const Header: React.FC = () => {
	return (
		<S.Container>
			<S.Logo source={logoImg} />

			<S.UserPhoto source={userPhotoImg} />
		</S.Container>
	)
}
