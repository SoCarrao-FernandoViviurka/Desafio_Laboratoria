import logo from "../assets/logo.jpg"
import { HeaderContainer } from "./Header.styled"

const Header = () => {
  return (
	<HeaderContainer>
		<img src={logo} alt="" />
	</HeaderContainer>
  )
}

export default Header