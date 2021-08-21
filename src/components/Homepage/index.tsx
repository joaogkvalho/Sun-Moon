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
                <FiInstagram />
                <FiFacebook />
                <FiGithub />
                <FiTwitter />
            </SocialIcons>
        </>
    )
}