import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function IconButton({ onpress, icon, color }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onpress}
    >
      <Ionicons name={icon} size={24} color={color}></Ionicons>
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
