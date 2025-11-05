import { View, Text, StyleSheet } from "react-native";

function List({ data,type }) {
  console.log(data)
  return (
    <View style={styles.ListItem}>
      {data.map((dataItem) => (
        <Text style={styles.itemColor} key={`${dataItem}-${type}`}>
          {dataItem}
        </Text>
      ))}
    </View>
  );
}
export default List;
const styles = StyleSheet.create({
  ListItem: {
    marginHorizontal: 12,
  },
  itemColor: {
    color: "#351401",
    backgroundColor: "#e2b497",
    textAlign: "center",
    borderRadius: 6,
    marginVertical: 2,
    paddingVertical: 4,
  },
});
