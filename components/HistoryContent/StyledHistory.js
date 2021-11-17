import { Article, P } from "@expo/html-elements";
import styled from "styled-components/native";

const ArticleHistory = styled(Article)`
  background-color: #004a7a;
    display: flex;
    align-items: center
    gap: 1rem;
    padding: 3rem 0rem;
`;

const PHistory = styled(P)`
  color: #fff;
  width: 60%;
  font-size: 1.2rem;
  line-height: 2.2rem;
`;

export { ArticleHistory, PHistory };
