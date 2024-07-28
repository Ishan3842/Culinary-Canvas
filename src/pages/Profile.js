import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SavedRecipes')}>
        <Text style={styles.menuItem}>Saved Recipes</Text>
      </TouchableOpacity>
      <Button
        title="Logout"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Login')}
      />
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
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ff6347',
    borderRadius: 5,
    marginTop: 20,
  },
});

export default Profile;
