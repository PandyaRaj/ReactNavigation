import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 8,
    margin: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 6,
    marginVertical: 4,
  },
});
