import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Recipe = ({ route }) => {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
      <View style={styles.recipeDetails}>
        <Text style={styles.recipeTitle}>{recipe.title}</Text>
        <Text style={styles.recipeSummary}>{recipe.summary}</Text>
        {/* Display other recipe details here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  recipeImage: {
    width: '100%',
    height: 200,
  },
  recipeDetails: {
    padding: 20,
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeSummary: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Recipe;
