import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';

import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      //dont need key Extractor no more
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
    // <View style={styles.screen}>
    //   <Text>The Categories Screen!</Text>
    //   <Button
    //     title='Go to Meals!'
    //     onPress={() => {
    //       props.navigation.navigate({ routeName: 'CateogryMeals' });
    //     }}
    //   />
    // </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 120
  }
});

export default CategoriesScreen;
