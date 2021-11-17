import { Main, A } from "@expo/html-elements";
import styled from "styled-components/native";

const sizeStyles = {
  smart: {
    padding: 1.6 + "rem" + " " + 4 + "rem",
  },
  tab: {
    padding: 1.8 + "rem" + " " + 5 + "rem",
  },
  desk: {
    padding: 2 + "rem" + " " + 5.5 + "rem",
  },
};

const StyledMainPage = styled(Main)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #004a7a;
  height: 100vh;
`;

const ButtonContainer = styled(A)`
  background-color: #fff;
  border-radius: 10px;
  display: block;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  color: #004a7a;
  font-size: 18px;
  font-weight: semibold;

  ${(props) => props.smart && sizeStyles.smart};
  ${(props) => props.tab && sizeStyles.tab};
  ${(props) => props.desk && sizeStyles.desk};
`;

export { StyledMainPage, ButtonContainer };
