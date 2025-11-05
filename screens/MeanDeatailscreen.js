import { MEALS } from "../data/dummy-data";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useContext, useLayoutEffect } from "react";
import MealDetail from "../components/MealDetail";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

import { useSelector , useDispatch} from "react-redux";
function MeanDeatailscreen({ route, navigation }) {
 // const FavoriteMealCtx = useContext(FavoriteContext);
  const mealId = route.params.mealid;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
 // const mealIsFavorite = FavoriteMealCtx.ids.includes(mealId);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const mealIsFavorite = favoriteMealIds.includes(mealId);
  const dispatch = useDispatch();
  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      console.log("Removing...");
      
      dispatch(removeFavorite({id:mealId}));
      //FavoriteMealCtx.removeFavorite(mealId);
    } else {
      dispatch(addFavorite({id:mealId}));
      console.log("Adding...");
      //FavoriteMealCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    const mealTitle = selectedMeal.title;
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => (
        <IconButton
          color="white"
          icon={mealIsFavorite ? "star" : "star-outline"}
          onpress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler, mealIsFavorite]);

  if (!selectedMeal) {
    return (
      <View style={styles.centered}>
        <Text>No meal found!</Text>
      </View>
    );
  }

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
          <List data={selectedMeal.ingredients} type={'ingredeients'}/>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} type={'steps'}/>
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
