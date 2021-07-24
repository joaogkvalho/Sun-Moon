import styled from "styled-components";

export const Container = styled.div`
    height: 80px;
    background-color: ${props => props.theme.colors.primary};
`

export const Content = styled.div`
    max-width: 1120px;
    height: 80px;
    margin: 0 auto;
    padding: 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #fff;

    h1{
        font-weight: 700;
    }

    span{
        color: yellow;
    }

    svg{
        width: 20px;
        height: 20px;

        margin: 5px 12px; 
    }
`

