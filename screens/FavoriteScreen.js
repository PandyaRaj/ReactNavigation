import MealList from "../components/MealsList/MealList";
import { MEALS } from "../data/dummy-data";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function FavoriteScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>⭐ No Favorite Meals Yet!</Text>
        <Text style={styles.subText}>
          Start adding some meals you love ❤️
        </Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centers vertically
    alignItems: "center", // centers horizontally
    backgroundColor: "#3f2f25",
    paddingHorizontal: 20,
  },
  message: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subText: {
    color: "#e2b497",
    fontSize: 16,
    textAlign: "center",
  },
});
