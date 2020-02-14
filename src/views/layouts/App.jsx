import React from 'react';
import styled from "styled-components";
import Header from "./includes/Header";
import HomePage from "../containers/HomePage";
import Footer from "./includes/Footer";

const Container = styled.div`
    width: 85%;
    margin: 0 auto;
`;

function App() {
    return (
        <div>
            <Header/>
            <Container>
                <HomePage/>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;
