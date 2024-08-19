import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';

const Recipe = ({ route }) => {
  const { recipe } = route.params;

  const renderIngredient = ({ item }) => (
    <View style={styles.ingredientItem}>
      <Text style={styles.ingredientText}>{item.text}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
      <View style={styles.recipeDetails}>
        <Text style={styles.recipeTitle}>{recipe.label}</Text>

        {/* Recipe Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Cuisine Type: {recipe.cuisineType?.join(', ')}</Text>
          <Text style={styles.infoText}>Dish Type: {recipe.dishType?.join(', ')}</Text>
          <Text style={styles.infoText}>Meal Type: {recipe.mealType?.join(', ')}</Text>
        </View>

        {/* Ingredients Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <FlatList
            data={recipe.ingredients}
            renderItem={renderIngredient}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.ingredientList}
          />
        </View>

        {/* Instructions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.instructionText}>
            {/* Assuming recipe.instructions exists; otherwise, this section should be updated accordingly */}
            {recipe.instructions || 'Instructions not available.'}
          </Text>
        </View>

        {/* Nutritional Info Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nutritional Information (per serving)</Text>
          <View style={styles.nutritionalInfo}>
            <Text style={styles.nutritionalText}>Calories: {recipe.calories?.toFixed(0)} kcal</Text>
            <Text style={styles.nutritionalText}>Carbs: {recipe.totalNutrients.CHOCDF?.quantity.toFixed(1)} g</Text>
            <Text style={styles.nutritionalText}>Protein: {recipe.totalNutrients.PROCNT?.quantity.toFixed(1)} g</Text>
            <Text style={styles.nutritionalText}>Fat: {recipe.totalNutrients.FAT?.quantity.toFixed(1)} g</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  recipeImage: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  recipeDetails: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  recipeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6347',
    marginBottom: 10,
  },
  ingredientList: {
    paddingLeft: 10,
  },
  ingredientItem: {
    backgroundColor: '#FFEFDB',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  ingredientText: {
    fontSize: 16,
    color: '#333',
  },
  instructionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  nutritionalInfo: {
    backgroundColor: '#E8F0FE',
    padding: 15,
    borderRadius: 10,
  },
  nutritionalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default Recipe;
