import { Container, Content, ReadMoreButton, SocialIcons } from "./styles";
import { FiInstagram, FiGithub, FiFacebook, FiTwitter } from 'react-icons/fi'

export function Homepage() {
    return(
        <>
            <Container>
                <Content>
                    <span>👏 Welcome to sun&amp;moon</span>
                    <h1>The newest news about science</h1>
                    <p>
                        In our aplication you will be surrounded<br/>
                        by the hottest things in the science world.
                    </p>
                    <ReadMoreButton>
                        Read more
                    </ReadMoreButton>
                </Content>
            </Container>


            <SocialIcons>
                <a href="https://instagram.com/gabriel.karv" target="_blank">
                    <FiInstagram />
                </a>
                <a href="https://www.facebook.com/jhonsgabriels" target="_blank">
                    <FiFacebook />
                </a>
                <a href="https://github.com/joaogkvalho" target="_blank">
                    <FiGithub />
                </a>
                <a href="https://twitter.com/joaogkvalho" target="_blank">
                    <FiTwitter />
                </a>
            </SocialIcons>
        </>
    )
}