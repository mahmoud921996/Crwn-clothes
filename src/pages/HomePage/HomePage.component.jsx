import React from "react";
import { HomePageContainer } from "./HomePage.styled";
import Directory from "./../../components/Directory/Directory.component";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
