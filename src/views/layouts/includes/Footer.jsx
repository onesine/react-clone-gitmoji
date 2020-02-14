import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    margin-top: 50px;
    background-color: #00E5FF;
`;

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    @media(min-width: 765px) {
        flex-direction: row;
        justify-content: space-between;
    }
    
    @media(min-width: 800px) {
        width: 80%;
    }
`;

const CopyRight = styled.h3`
    color: white;
    a {
        color: #ff5a79;
        text-decoration: none;
    }
`;

const LinkContainer = styled.h3`
    display: flex;
    a {
        color: #FF5A79;
        text-decoration: none;
        margin: 0 8px;
    }
`;

const RedHeart = styled.strong`
    color: #ff5a79;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <CopyRight>
                    Made with <span role={'img'} aria-label={'heart'}><RedHeart>❤</RedHeart></span> by <a href="http://github.com/onesine">Lewhe Onesine</a>
                    <strong>. I <RedHeart>❤</RedHeart> Rect Js</strong>
                </CopyRight>
                <LinkContainer>
                    <a href="/about">About</a>
                    <a href="https://github.com/onesine/react-clone-gitmoji/graphs/contributors">Contribubors</a>
                    <a href="https://github.com/onesine/react-clone-gitmoji">Github</a>
                </LinkContainer>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
