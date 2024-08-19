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
      const res = await axios.get(`https://api.edamam.com/search`, {
        params: {
          q: searchQuery,
          app_id: 'c9500061',
          app_key: 'd62b59293535a0b6e5e153c416b81c9d',
        },
      });
      setRecipes(res.data.hits);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderRecipe = ({ item }) => (
    <TouchableOpacity
      style={styles.recipeItem}
      onPress={() => navigation.navigate('Recipe', { recipe: item.recipe })}
    >
      <Image source={{ uri: item.recipe.image }} style={styles.recipeImage} />
      <View style={styles.recipeDetails}>
        <Text style={styles.recipeTitle}>{item.recipe.label}</Text>
        <Text style={styles.recipeSummary}>
          {item.recipe.dishType ? item.recipe.dishType.join(', ') : 'N/A'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Find Your Favorite Recipes</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for recipes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button
          title="Search"
          buttonStyle={styles.searchButton}
          titleStyle={styles.searchButtonText}
          onPress={fetchRecipes}
          icon={<Icon name="search" size={20} color="#fff" />}
        />
      </View>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={recipes}
          renderItem={renderRecipe}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.recipeList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#333',
  },
  searchButton: {
    backgroundColor: '#FF6347',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 16,
    marginLeft: 10,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
  recipeList: {
    paddingBottom: 20,
  },
  recipeItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  recipeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  recipeDetails: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  recipeSummary: {
    fontSize: 14,
    color: '#555',
  },
});

export default Home;
