import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import profile from '../../../assets/imagens/profile.png';

const Profile = styled.img.attrs({src:profile, alt:"Foto de perfil"}) `
    height: 60px;
`

function Perfil(){
    return(
        <>
            <Link to = "">
                <Profile/>
            </Link>
        </>
    );
}

export default Perfil;