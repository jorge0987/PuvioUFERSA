import React from "react";
import TopBar from "../TopBar";
import styled from "styled-components";

const Container = styled.header `
    background-color: var(--primaria-dark);
`

const Header: React.FC = () => {
    return(
        <Container>
            <TopBar/>
        </Container>
    );
}

export default Header;