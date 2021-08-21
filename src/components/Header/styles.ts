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

export const SearchInput = styled.div`
    @media screen and (max-width: 800px){
        display: none;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 280px;
    height: 2.75rem;
    padding: 12px;

    background: ${props => props.theme.colors.searchInputBg};
    border-radius: 30px;

    input{  
        padding: 10px;

        background: transparent;
        border: 0;
        outline: none;

        color: ${props => props.theme.colors.searchInputText};
    }

    svg{
        width: 20px;
        height: 20px;
        color: ${props => props.theme.colors.searchInputText};

        cursor: pointer;
    }
`
