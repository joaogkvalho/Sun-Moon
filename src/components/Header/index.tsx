import { useContext } from 'react'
import { Container, Content } from "./styles";
import { FaMoon, FaSun} from 'react-icons/fa'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface HeaderProps{
    toggleTheme: () => void
}

export function Header({ toggleTheme }: HeaderProps){
    const { colors, title } = useContext(ThemeContext)

    return(
        <Container>
            <Content>
                <h1>Sun&amp;<span>Moon</span></h1>
                    <Switch 
                        onChange={toggleTheme}
                        checked={title === 'dark'}
                        uncheckedIcon={<FaSun color="yellow"/>}
                        checkedIcon={<FaMoon color="#333"/>}
                        height={30}
                        width={80}
                        handleDiameter={30}
                        onColor={colors.secundary}
                        offColor={shade(0.15, colors.primary)}
                    />
                </Content>
        </Container>        
    )
}