// components/Header.tsx

import { Header } from "react-native-elements";
import { View, Text, TouchableOpacity } from "react-native";

interface Props {
  onMenuPress: () => void; // Add a prop for the menu press event
  onSearchPress: () => void; // Add a prop for the search press event
}

const AppHeader: React.FC<Props> = ({ onMenuPress, onSearchPress }) => {
  return (
    <Header
      backgroundColor="#A1CEDC"
      leftComponent={
        <TouchableOpacity onPress={onMenuPress}>
          <Text>Menu</Text>
        </TouchableOpacity>
      }
      centerComponent={{
        text: "Home",
        style: { fontSize: 20, fontWeight: "bold" },
      }}
      rightComponent={
        <TouchableOpacity onPress={onSearchPress}>
          <Text>Search</Text>
        </TouchableOpacity>
      }
      containerStyle={{ borderBottomWidth: 0 }}
    />
  );
};

export default AppHeader;
