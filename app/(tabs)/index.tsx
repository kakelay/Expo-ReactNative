import { Image, StyleSheet, Platform } from "react-native";
import { Header } from "react-native-elements";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Icon } from "react-native-elements";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Header
        backgroundColor="#0A4B78" // blue color
        leftComponent={<Icon name="menu" size={30} color="white" />}
        centerComponent={{
          text: "Home",
          style: {
            color: "#FFFF",
            fontSize: 20,
            fontWeight: "bold",
          },
        }}
        rightComponent={<Icon name="search" size={24} color="white" />}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
