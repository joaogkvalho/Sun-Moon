import styled from "styled-components";

export const Container = styled.div`
    height: 80px;
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    display: flex;
    align-items: center;
    padding: 30px;
`