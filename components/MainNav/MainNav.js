import React from "react";
import {
  StyledMainNav,
  StyledLogo,
  NavList,
  NavListLink,
} from "./StyledMainNav";
import Logo from "../../assets/logo.png";
import { LI } from "@expo/html-elements";
import { Link } from "expo-next-react-navigation";

const MainNav = ({ navigation }) => {
  return (
    <>
      <StyledMainNav>
        <Link routeName="launches">
          <StyledLogo
            source={Logo}
            onClick={() => navigation.navigate("launches")}
          />
        </Link>
        <NavList>
          <LI onClick={() => navigation.navigate("launches")}>
            <NavListLink routeName="launches">Lanzamientos</NavListLink>
          </LI>
          <LI onClick={() => navigation.navigate("history")}>
            <NavListLink routeName="history">Historia</NavListLink>
          </LI>
        </NavList>
      </StyledMainNav>
    </>
  );
};

export default MainNav;
