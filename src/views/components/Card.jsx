import React from "react";
import styled from "styled-components";

const Container = styled.div`
    cursor: pointer;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(168,182,191,.6);
    margin-bottom: 10px;
    :hover {
        box-shadow: 0 10px 20px 0 rgba(168,182,191,.6);
        transform: translateY(-1px);
    }
`;

const EmojiContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding-bottom: 0.2em;
    padding-top: 0.5em;
    margin-bottom: 0;
    @media(min-width: 768px) {
        font-size: 5em;
    }
`;

const EmojiContent = styled.div`
    border-left-right: 0.5px;
    text-align: center;
    padding: 5px 0 15px 0;
`;

const EmojiTitle = styled.h3`
    text-align: center;
    padding-top: 1.2em;
    margin-top: 0px; 
    font-weight: 500;
`;

const Content = styled.p`
    color: #A69999;
    text-align: center;
    
    @media(min-width: 845px) {
          padding: 0px;
          margin: 0px
    }
`;

const Card = (props) => {
    const {emoji} = props;
    return (
        <Container>
            <EmojiContainer style={{backgroundColor: emoji.color}}>
                {emoji.icon}
            </EmojiContainer>
            <EmojiContent>
                <EmojiTitle><strong>{emoji.title}</strong></EmojiTitle>
                <Content>
                    {emoji.description}
                </Content>
            </EmojiContent>
        </Container>
    );
};

export default Card;
