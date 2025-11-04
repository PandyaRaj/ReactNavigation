import { MEALS } from "../data/dummy-data"; // ✅ correct import name & case
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import Meal from "../models/meal";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { use, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MeanDeatailscreen({ route, navigation }) {
  const mealId = route.params.mealid; // ✅ your MealItem passes 'mealid', not 'mealId'
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (!selectedMeal) {
    console.warn("No meal found for id:", mealId);
    return (
      <View style={styles.centered}>
        <Text>No meal found!</Text>
      </View>
    );
  }
  useLayoutEffect(() => {
    const mealTitle = selectedMeal.title;

    function headerButtonPressHandler() {
      console.log("Pressed!");
    }

    navigation.setOptions({
      title: mealTitle,
      headerRight: () => (
        <IconButton
          color="white"
          icon="star"
          onpress={headerButtonPressHandler}
        ></IconButton>
      ),
    });
  }, [navigation, selectedMeal]);
  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailedTextstyle}
      />
      <View style={{ alignItems: "center" }}>
        <View style={styles.ListContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>

          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MeanDeatailscreen;

const styles = StyleSheet.create({
  detailedTextstyle: {
    color: "white",
  },
  ListContainer: {
    width: "80%",
  },
  image: { width: "100%", height: 300 },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  root: { marginBottom: 32 },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});
