import React from "react";
import { useMediaQuery } from "react-responsive";
import HistoryContent from "../../components/HistoryContent/HistoryContent";
import MainNav from "../../components/MainNav/MainNav";
import SmartphoneNav from "../../components/SmartphoneNav/SmartphoneNav";

const History = ({ navigation }) => {
  const isSmartphone = useMediaQuery({ maxWidth: 576 });
  const isTablet_Desktop = useMediaQuery({ minWidth: 577 });

  return (
    <>
      {isTablet_Desktop && <MainNav navigation={navigation} />}
      <HistoryContent />
      {isSmartphone && <SmartphoneNav navigation={navigation} />}
    </>
  );
};

export default History;
