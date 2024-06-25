import { Image, StyleSheet, Platform, View } from "react-native";
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
        backgroundColor="#0A4B78"
        leftComponent={
          <View style={styles.iconContainer}>
            <Icon
              name="menu"
              size={30}
              color="white"
              onPress={() => console.log("Menu Pressed")}
            />
          </View>
        }
        centerComponent={{
          text: "Home",
          style: {
            color: "#FFFF",
            fontSize: 20,
            fontWeight: "bold",
          },
        }}
        rightComponent={
          <View style={styles.iconContainer}>
            <Icon
              name="search"
              size={24}
              color="white"
              onPress={() => console.log("Search Pressed")}
            />
          </View>
        }
      />
      <View style={styles.body}>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/110383694?v=4",
          }}
          style={styles.image}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
});
