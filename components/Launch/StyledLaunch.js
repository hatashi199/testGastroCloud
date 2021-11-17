import styled from "styled-components/native";
import { A } from "@expo/html-elements";

const smartStyles = {
  width: 90 + "%",
  fontSize: 20 + "pt",
};

const tabStyles = {
  width: 80 + "%",
  fontSize: 20 + "pt",
};

const deskStyles = {
  width: 60 + "%",
  fontSize: 16 + "px",
};

const StyledLaunch = styled(A)`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  padding: 1rem;
  color: #004a7a;

  ${(props) => props.smart && smartStyles};
  ${(props) => props.tab && tabStyles};
  ${(props) => props.desk && deskStyles};
`;
export default StyledLaunch;
