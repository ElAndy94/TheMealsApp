import { createStackNavigator, createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CateogryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealsDetailScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CateogryMeals: {
    screen: CateogryMealsScreen
  },
  MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);
