import logo from "../assets/logo2.png"
import { HeaderContainer, Icone } from "./Header.styled"
import { ImMenu } from "react-icons/im"

const Header = () => {
  return (
	<HeaderContainer>
		<Icone>
		<ImMenu size={30} />
		</Icone>
		
		<img src={logo} alt="" />
	</HeaderContainer>
  )
}

export default Header