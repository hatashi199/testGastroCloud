import React from "react";
import MainNav from "../../components/MainNav/MainNav";
import { useMediaQuery } from "react-responsive";
import StyledLaunchPage from "../launches/StyledLaunchPage";
import Launch from "../../components/Launch/Launch";
import { getAllLaunches } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import store from "../../redux/store";
import SmartphoneNav from "../../components/SmartphoneNav/SmartphoneNav";

const Launches = ({ navigation }) => {
  const dispatch = useDispatch();
  const isSmartphone = useMediaQuery({ maxWidth: 576 });
  const isTablet_Desktop = useMediaQuery({ minWidth: 577 });

  useEffect(() => {
    dispatch(getAllLaunches());
  }, []);

  const { launches } = store.getState().allLaunchesData;

  return (
    <>
      {isTablet_Desktop && <MainNav navigation={navigation} />}
      {launches && (
        <StyledLaunchPage>
          {launches.map((launch) => (
            <Launch
              launch={launch}
              navigation={navigation}
              key={launch.mission_name}
            />
          ))}
        </StyledLaunchPage>
      )}
      {isSmartphone && <SmartphoneNav navigation={navigation} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return { launches: state.allLaunchesData.launches };
};

export default connect(mapStateToProps)(Launches);
