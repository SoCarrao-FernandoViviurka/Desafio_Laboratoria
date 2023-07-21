import logo from '../../Imagens/logo-so-carrao.png';
import { IconeMenu, IconePesquisa, LogoContainer, LogoImagem } from './Styled';

const Logo = () => {
    return (
        <LogoContainer>
            <IconeMenu/>
            <LogoImagem src={logo} alt='Logo da página'/>
            <IconePesquisa/>
        </LogoContainer>
    )
}

export default Logo;