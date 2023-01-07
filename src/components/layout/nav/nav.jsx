import React from "react";
import { AppRoute } from "/src/const";
import { StyledButton } from "./styles";
import { useLocation } from "react-router-dom";
import { Ul, Li } from "/src/components/styled";

const links = [
  {
    to: AppRoute.MAIN,
    item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
  },
  {
    to: AppRoute.ORDER,
    item: <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      <Ul>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <Li key={link.to}>{link.item}</Li>
          ))}
      </Ul>
    </nav>
  );
}

export default Nav;
