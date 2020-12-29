import React from 'react';
import styled from 'styled-components';
import Typist from "react-typist";

const Header = styled.header`
  max-width: 50rem;
  margin: 1rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
  margin-bottom: 1em;
`;

export const Heading = () => {

  return (
    
    <Header>
      <Typist className="lead">
      <H1>Unsplash Photo Feed</H1>
      <p>A website dedicated to sharing stock photography under the Unsplash license. The website generates more than 17 billion photo impressions per month on their growing library of over 2 million photos.</p>
      <p>Created For : Yellow Class</p>
      </Typist>
    </Header>    
  )
}
