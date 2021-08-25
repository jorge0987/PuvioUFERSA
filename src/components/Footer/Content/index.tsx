import React from "react";
import styled from "styled-components";
import { FiInstagram, FiMail } from 'react-icons/fi';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

const FooterData = styled.div`
    width: 33%;
    margin-bottom: 3px;
    height: 160px;
    text-align: center;
    color: white;
    padding:10px 0;
    font-family: 'Roboto', sans-serif;
    @media(min-width:768){
        text-align: left;        
    }

`

const Content = styled.section` 
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  


    ${FooterData}{
        border-bottom:1px solid gray;
    }
    @media(min-width: 768){
        width:90%;
        background-color: tomato;
        ${FooterData}{
            border-bottom: none;
        }
        
    }


`
const Info = styled.div`
    display:flex;
    
    @media(min-width:768){        
        justify-content: space-between;
    }

`
const Title = styled.h1`
    font-size: 1.6rem;
    margin-bottom: 10px;

`
const Lista = styled.ul`
    list-style: none;
    font-size: 1rem;
    width: 350px;

    li{
        line-height: 1.6;
    }

`
const SocialNetwork = styled.ul`
    list-style:none;
    width: 70%;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
    
`
const Link = styled.a`
    text-decoration: none;
    color: white;
    font-size: 1rem;
    margin-left: 2px;
    font-family: "Roboto", sans-serif;

    :hover{
        color:white;
    }

`
const Icon = styled.span`
    font-size: 1.6rem;
    color: white;
    margin-right: 10px;

`
const Email = styled.a`
    color: white;
    text-decoration: none;

    :hover{
        color: gray ;
    }

`
const Direitos = styled.p`
    color: white ;
    font-size: 1rem;
    height: 50px;
    font-family: "Roboto", sans-serif;
`

export default function FooterContent() {
    return(
        <Content>
        <Info>
             <FooterData>
                <Title>
                    Nossos Parceiros
                </Title>
                <Lista>
                    <li>Universidade Federal Rural do Semi-Arido </li>
                    <li>Bacharelado em tecnologia da informação</li>
                    <li>Engenharia de <i>software </i></li>
                </Lista>
             </FooterData>
                           
             <FooterData>
                 <Title>
                    Desenvolvedores
                 </Title>
                 <Lista>
                     <li>Reudsman Rolim</li>
                     <li>Fernando Dutra</li>
                     <li>Jorge Oliveira</li>
                     <li>tiago Andrade</li>
                 </Lista>
             </FooterData>

            
             <FooterData>
             <Title>
                    Informações
                </Title>
            <Lista>
                <li>
                    <Icon>
                        <GoLocation/>
                         
                    </Icon>
                       Rodovia BR-226, s/n, Pau Dos Ferros, 5932400
                </li>
                <li>
                    <Icon>
                        <FiMail/>                        
                    </Icon>
                    <Email href="mailto: ufersa@gmail.com">ufersa@gmail.com
                         
                      </Email>
                </li>
            </Lista>
                 
             </FooterData>
            

        </Info>
        <SocialNetwork>
                <li>    
                    <Icon>
                        <FiInstagram/>
                        </Icon>   
                    <Link href ="http://www.instagram.com/ufersa"> ufersa</Link>    
                 </li>
                <li>
                <Icon>
                        <FaTwitter/>
                        </Icon> 
                    <Link href ="http://www.twitter.com/ufersa">ufersa</Link>
                </li>
                <li>
                <Icon>
                        <FaFacebookF/>
                        </Icon> 
                    <Link href ="http://www.facebook.com/ufersa">ufersa</Link>
                </li>

            </SocialNetwork>
        <Direitos>
            @todos os direitos reservados
        </Direitos>

    </Content>
    );

}
