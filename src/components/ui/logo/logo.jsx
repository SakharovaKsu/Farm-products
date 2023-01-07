import React from "react";
import { ReactComponent } from "/src/assets/logo.svg";
import { Text, StyledLogo } from "./styles";

// Логотип сайта с названием
function Logo() {
  return (
    <StyledLogo href="/">
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
