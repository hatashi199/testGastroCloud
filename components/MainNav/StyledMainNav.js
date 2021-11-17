import styled from "styled-components/native";
import { Nav } from "@expo/html-elements";
import { Image } from "react-native";
import { UL } from "@expo/html-elements";
import { Link } from "expo-next-react-navigation";

const StyledMainNav = styled(Nav)`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: #f2f2f2;
  width: 100%;
`;

const StyledLogo = styled(Image)`
  width: 297px;
  height: 81px;
`;

const NavList = styled(UL)`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  gap: 2rem;
`;

const NavListLink = styled(Link)`
  font-size: 20px;
  color: #004a7a;
`;

export { StyledMainNav, StyledLogo, NavList, NavListLink };
