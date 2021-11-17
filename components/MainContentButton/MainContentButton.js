import React from "react";
import { useMediaQuery } from "react-responsive";
import { StyledMainPage, ButtonContainer } from "./StyledMainPage";

const MainContentButton = ({ navigation }) => {
  const isSmartphone = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <StyledMainPage>
      {isSmartphone && (
        <ButtonContainer smart onPress={() => navigation.navigate("launches")}>
          Ver tamaño Smartphone
        </ButtonContainer>
      )}
      {isTablet && (
        <ButtonContainer tab onPress={() => navigation.navigate("launches")}>
          Ver tamaño Tablet
        </ButtonContainer>
      )}
      {isDesktop && (
        <ButtonContainer desk onPress={() => navigation.navigate("launches")}>
          Ver tamaño Desktop
        </ButtonContainer>
      )}
    </StyledMainPage>
  );
};

export default MainContentButton;
