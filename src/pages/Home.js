import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=8decba2c19354bf2b14f133c8ebbcb4e`);
      setRecipes(res.data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderRecipe = ({ item }) => (
    <TouchableOpacity style={styles.recipeItem} onPress={() => navigation.navigate('Recipe', { recipe: item })}>
      <Image source={{ uri: item.image }} style={styles.recipeImage} />
      <View style={styles.recipeDetails}>
        <Text style={styles.recipeTitle}>{item.title}</Text>
        <Text style={styles.recipeSummary}>{item.summary}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for recipes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Search" onPress={fetchRecipes} />
      </View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={recipes}
          renderItem={renderRecipe}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  recipeItem: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  recipeImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  recipeDetails: {
    marginLeft: 10,
    flex: 1,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recipeSummary: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Home;
