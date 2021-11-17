import React from "react";
import { connect, useDispatch } from "react-redux";
import store from "../../redux/store";
import { useEffect } from "react";
import { getLaunchData } from "../../redux/actions";
import LaunchContent from "../../components/LaunchContent/LaunchContent";
import { useMediaQuery } from "react-responsive";
import MainNav from "../../components/MainNav/MainNav";
import SmartphoneNav from "../../components/SmartphoneNav/SmartphoneNav";

const LaunchInfo = ({ route, navigation }) => {
  const { launchId } = route.params;
  const dispatch = useDispatch();
  const isSmartphone = useMediaQuery({ maxWidth: 576 });
  const isTablet_Desktop = useMediaQuery({ minWidth: 577 });

  useEffect(() => {
    dispatch(getLaunchData(launchId));
  }, []);

  const { launch } = store.getState().dataLaunch;

  return (
    <>
      {isTablet_Desktop && <MainNav navigation={navigation} />}
      {launch && <LaunchContent launch={launch} navigation={navigation} />}
      {isSmartphone && <SmartphoneNav navigation={navigation} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return { launches: state.dataLaunch };
};

export default connect(mapStateToProps)(LaunchInfo);
