import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: calc(100vh - 5rem);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.main`
    text-align: center;

    span{
        font-size: 1.5rem;
        font-weight: 400;
    }

    h1{
        font-size: 2.5rem;
        font-weight: 700;
        margin: 1rem 0;
    }

    p{
        font-size: 1.25rem;
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
    border-radius: 8px;

    font-size: 1.25rem;
    font-weight: bold;
    color: ${props => props.theme.colors.buttonText};

    cursor: pointer;
    transition: filter 0.3s;

    &:hover{
        filter: brightness(0.9);
    }
`