import { configureStore} from '@reduxjs/toolkit';
import reduceFavorites from './favorites';



const store = configureStore({
    reducer: {
       favoriteMeals : reduceFavorites
    },
});
export default store;