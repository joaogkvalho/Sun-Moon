import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    height: calc(100vh - 5rem);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    text-align: center;

    span{
        font-size: 1.5rem;
        font-weight: 400;
    }

    h1{
        font-size: 2rem;
        font-weight: 700;
        margin: 1rem 0;
    }

    p{
        font-size: 1rem;
        font-weight: 400;
        margin: 1rem 0;
    }
`

export const ReadMoreButton = styled.button`
    width: 250px;
    height: 3.5rem;
    margin-top: 1rem;
    background: ${props => props.theme.colors.secundary};
    border: 0;
    border-radius: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${props => props.theme.colors.buttonText};
`