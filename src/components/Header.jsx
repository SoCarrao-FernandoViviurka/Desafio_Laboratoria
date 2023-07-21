import logo from "../assets/logo2.png"
import { HeaderContainer, Icone } from "./Header.styled"
import { GrMenu } from "react-icons/gr"

const Header = () => {
  return (
	<HeaderContainer>
		<Icone>
		<GrMenu size={30} />
		</Icone>
		
		<img src={logo} alt="" />
	</HeaderContainer>
  )
}

export default Header