import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoryitem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverviewScreen", {
        categoryId: itemData.item.id,
      });
      console.log("pressed");
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={() => {
          pressHandler();
          console.log("pressed");
        }}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryitem}
      numColumns={2}
      style={{ backgroundColor: "#5f3a23" }}
    />
  );
}

export default CategoriesScreen;
