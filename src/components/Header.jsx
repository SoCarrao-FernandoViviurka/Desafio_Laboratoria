import logo from "../assets/logo2.png"
import { HeaderContainer } from "./Header.styled"
import { ImMenu } from "react-icons/im"

const Header = () => {
  return (
	<HeaderContainer>
		<ImMenu size={30} />
		<img src={logo} alt="" />
	</HeaderContainer>
  )
}

export default Header