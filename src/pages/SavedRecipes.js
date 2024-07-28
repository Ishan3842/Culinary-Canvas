import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SavedRecipes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved Recipes</Text>
      {/* Display saved recipes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default SavedRecipes;
