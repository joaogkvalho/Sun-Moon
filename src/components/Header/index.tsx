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
                <h1>sun&amp;moon</h1>
                    <Switch 
                        onChange={toggleTheme}
                        checked={title === 'dark'}
                        uncheckedIcon={<FaSun color="yellow" />}
                        checkedIcon={<FaMoon />}
                        height={30}
                        width={80}
                        handleDiameter={30}
                        onColor={shade(0.15, colors.primary)}
                        offColor={shade(0.15, colors.primary)}
                    />
                </Content>
        </Container>        
    )
}