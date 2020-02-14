import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import emojis from "../../constants/emojis";

const Title = styled.h1`
    text-align: center;
`;

const Cards = styled.div`
      display: grid;
      grid-auto-rows: 250px;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); 
      grid-gap: 1em;
      @media(min-width: 836px) {
          grid-auto-rows: 310px;
      }
`;

const HomePage = () => {
    const listEmoji = emojis;
    return (
        <div>
            <Title>List Of Card</Title>
            <Cards>
                {
                    listEmoji.map((emoji, index) => <Card key={index} emoji={emoji}/>)
                }
            </Cards>
        </div>
    );
};

export default HomePage;
