import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #FFDD67;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4.5em 2em;;
`;

const Image = styled.img`
    width: 100%;
    height: 115px;
`;

const Title = styled.h2`
    display: none;
    font-size: 2em;
    padding: .5em 0;
    margin: 0;
    @media(min-width: 765px) {
        display: block;
    }
`;

const ButtonContainer = styled.div`
    padding: 2.4em 0 2.2em 0;
`;

const Button = styled.a`
    text-decoration: none;
    color: white;
    border: none;
    background-color: #FF5A79;
    cursor: pointer;
    border-radius: 4px;
    font-weight: 600;
    padding: .75em 1em;
    transition: none;
    margin: .25em .5rem;
    box-shadow: 0 4px #f3002e;
`;

const Header = () => {
    return (
        <Container>
            <Image src="/assets/images/logo.svg" alt="logo"/>
            <Title>An emoji guide for your commit messages</Title>
            <ButtonContainer>
                <Button>
                    <strong>
                        <span role={'img'} aria-label={'star'}>⭐ Github</span>
                    </strong>
                </Button>
                <Button>
                    <strong>
                        <span role={'img'} aria-label={'bird'}>🐦 Tweet</span>
                    </strong>
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default Header;
