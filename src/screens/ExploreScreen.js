import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

const ExploreScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const { searchText = '' } = route.params || {};

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://192.168.0.4:3000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddToList = () => {
    if (filteredProducts.length > 0) {
      navigation.navigate('ShoppingList', {
        product: filteredProducts[0],
        quantity,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      {filteredProducts.map((product) => (
        <View key={product.id} style={styles.productItem}>
          <Image source={{ uri: product.image_url }} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.quantityLabel}>{product.volume} ${product.price}</Text>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityLabel}>Quantity:</Text>
            <TextInput
              style={styles.quantityInput}
              placeholder='0-10'
              keyboardType='numeric'
              value={quantity.toString()}
              onChangeText={(text) => setQuantity(parseInt(text) || 0)}
            />
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={handleAddToList}>
        <Text style={styles.addButtonLabel}>Add to List</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF006B',
    marginBottom: 20,
  },
  productItem: {
    alignItems: 'center',
    marginBottom: 50,
  },
  productImage: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  quantityLabel: {
    fontSize: 20,
    marginRight: 10,
    marginTop: 10,
  },
  quantityInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    width: 80,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#FF006B',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  addButtonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;
