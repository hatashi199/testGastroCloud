import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useMediaQuery } from "react-responsive";
import StyledLaunchContent from "./StyledLaunchContent";
import { AntDesign } from "@expo/vector-icons";

const LaunchContent = ({ launch, navigation }) => {
  const isSmartphone = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const dateOptions = { day: "numeric", month: "numeric", year: "numeric" };
  const hourOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit" };

  const launchDate = new Date(launch.launch_date_local).toLocaleDateString(
    "es-ES",
    dateOptions
  );

  const launchHour = new Date(launch.launch_date_local).toLocaleTimeString(
    "es-ES",
    hourOptions
  );

  const styles = StyleSheet.create({
    mainContainer: {
      width:
        (isSmartphone && 100 + "%") ||
        (isTablet && 70 + "%") ||
        (isDesktop && 40 + "%"),
      padding: 2 + "rem",
      display: "flex",
      alignItems: "center",
      gap: 5 + "rem",
    },
    avatarContainer: {
      display: "flex",
      alignItems: "center",
      gap: 2 + "rem",
    },
    avatar: {
      width: 250 + "px",
      height: 250 + "px",
      borderRadius: 50 + "%",
      overflow: "hidden",
    },
    avatarImg: {
      width: 100 + "%",
      height: 100 + "%",
    },
    data1: {
      alignSelf: "flex-end",
      textAlign: "right",
      color: "#FFF",
      gap: 1 + "rem",
    },
    data2: {
      gap: 1 + "rem",
    },
    data3: {
      textAlign: "center",
      gap: 1 + "rem",
    },
  });

  return (
    <>
      <StyledLaunchContent>
        {isSmartphone && (
          <AntDesign
            name="arrowleft"
            size={24}
            color="#FFF"
            style={{ position: "absolute", top: 3 + "%", left: 7 + "%" }}
            onPress={() => navigation.goBack()}
          />
        )}
        <View style={styles.mainContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Image
                source={launch.links.mission_patch_small}
                style={styles.avatarImg}
              />
            </View>
            <View style={styles.data1}>
              <Text
                style={{ color: "#FFF", fontSize: 20 + "px" }}
              >{`VN ${launch.flight_number}`}</Text>
              <Text
                style={{ color: "#FFF", fontSize: 20 + "px" }}
              >{`${launchDate} / ${launchHour}`}</Text>
            </View>
          </View>
          <View style={styles.data2}>
            <Text
              style={{ color: "#FFF", fontSize: 20 + "px" }}
            >{`Nombre de la misión - ${launch.mission_name}`}</Text>
            <Text
              style={{ color: "#FFF", fontSize: 20 + "px" }}
            >{`Rocket - ${launch.rocket.rocket_name}`}</Text>
            <Text style={{ color: "#FFF" }}>{`Número de etapa - 2`}</Text>
          </View>
          <View style={styles.data3}>
            <Text
              style={{ color: "#FFF", fontSize: 20 + "px" }}
            >{`Lugar de lanzamiento - ${launch.launch_site.site_name}`}</Text>
            <Text
              style={{ color: "#FFF", fontSize: 20 + "px" }}
            >{`Cape Canaveral Air Force Station Space Launch Complex 40 - ${launch.launch_site.site_name_long}`}</Text>
          </View>
        </View>
      </StyledLaunchContent>
    </>
  );
};

export default LaunchContent;
