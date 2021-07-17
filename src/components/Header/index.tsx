import { useContext } from 'react'
import { Container } from "./styles";
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
            <h1>Hello World</h1>

            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={60}
                handleDiameter={30}
                onColor={colors.secundary}
                offColor={shade(0.15, colors.primary)}
            />
        </Container>

        
    )
}