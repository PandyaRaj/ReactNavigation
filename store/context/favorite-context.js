import React, { createContext, useState } from "react";

// Step 1️⃣ Create the Context
export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

// Step 2️⃣ Create the Provider component
function FavoriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  // Add a favorite meal ID
  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    console.log("Added!", favoriteMealIds);
  }

  // Remove a favorite meal ID
  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id));
    console.log("Removed!", favoriteMealIds);

  }

  // Step 3️⃣ The value shared with all children
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,

    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
