import React from "react";
import Logo from "../Logo";
import Perfil from "../Perfil";
import styled from "styled-components";

const TopBarContainer = styled.div `
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
`

function TopBar(){
    return(
        <TopBarContainer>
            <Logo/>
            <Perfil/>
        </TopBarContainer>
    );
}

export default TopBar;