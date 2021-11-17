import React from "react";
import { useMediaQuery } from "react-responsive";
import StyledLaunch from "../Launch/StyledLaunch";
import { View, Text, StyleSheet, Image } from "react-native";

const Launch = ({ launch, navigation }) => {
  const isSmartphone = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const dateOptions = { day: "numeric", month: "numeric", year: "numeric" };
  const launchDate = new Date(launch.launch_date_local).toLocaleDateString(
    "es-ES",
    dateOptions
  );

  return (
    <>
      {isSmartphone && (
        <StyledLaunch
          smart
          onPress={() =>
            navigation.navigate("launchInfo", {
              launchId: launch.flight_number,
            })
          }
        >
          <View style={styles.container1}>
            <View style={styles.avatarBox}>
              <Image
                style={styles.avatar}
                source={launch.links.mission_patch_small}
              />
            </View>
            <View>
              <Text>{launch.mission_name}</Text>
              <Text>{launchDate}</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <Text style={styles.rightText}>{launch.flight_number}</Text>
            <Text style={styles.rightText}>{launch.launch_site.site_name}</Text>
          </View>
        </StyledLaunch>
      )}
      {isTablet && (
        <StyledLaunch
          tab
          key={launch.flight_number}
          onPress={() =>
            navigation.navigate("launchInfo", {
              launchId: launch.flight_number,
            })
          }
        >
          <View style={styles.container1}>
            <View style={styles.avatarBox}>
              <Image
                style={styles.avatar}
                source={launch.links.mission_patch_small}
              />
            </View>
            <View>
              <Text>{launch.mission_name}</Text>
              <Text>{launchDate}</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <Text style={styles.rightText}>{launch.flight_number}</Text>
            <Text style={styles.rightText}>{launch.launch_site.site_name}</Text>
          </View>
        </StyledLaunch>
      )}
      {isDesktop && (
        <StyledLaunch
          desk
          key={launch.flight_number}
          onPress={() =>
            navigation.navigate("launchInfo", {
              launchId: launch.flight_number,
            })
          }
        >
          <View style={styles.container1}>
            <View style={styles.avatarBox}>
              <Image
                style={styles.avatar}
                source={launch.links.mission_patch_small}
              />
            </View>
            <View>
              <Text>{launch.mission_name}</Text>
              <Text>{launchDate}</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <Text style={styles.rightText}>{launch.flight_number}</Text>
            <Text style={styles.rightText}>{launch.launch_site.site_name}</Text>
          </View>
        </StyledLaunch>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container1: {
    display: "flex",
    flexDirection: "row",
    gap: 1.5 + "rem",
    alignItems: "center",
  },
  container2: { display: "flex", justifyContent: "space-around" },
  avatarBox: {
    width: 80 + "px",
    height: 80 + "px",
    borderRadius: 50 + "%",
    border: `${1}px solid #004a7a`,
    overflow: "hidden",
  },
  avatar: {
    width: 100 + "%",
    height: 100 + "%",
  },
  rightText: { textAlign: "right" },
  text: { color: "#004a7a", fontSize: 2 + "rem" },
});

export default Launch;
