import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ComparePriceScreen = ({ navigation }) => {
  const [productData, setProductData] = useState([]);

  // Fetch product data from the API
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://api.example.com/products");
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  // Function to calculate the total shopping list cost for each store
  const calculateTotalCost = (store) => {
    return store.products.reduce((total, product) => total + product.price, 0);
  };

  // Render the product data for each store
  const renderStoreProducts = (store) => (
    <View key={store.name}>
      <Text style={styles.storeTitle}>{store.name}</Text>
      {store.products.map((product, index) => (
        <Text key={product.id} style={styles.productItem}>
          Product {index + 1}: AUD {product.price}
        </Text>
      ))}
      <Text style={styles.totalCost}>
        Total Shopping List: AUD {calculateTotalCost(store)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Price Comparison</Text>
      {productData.length > 0 ? (
        productData.map((store) => renderStoreProducts(store))
      ) : (
        <Text>No data available</Text>
      )}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "blue" }]}
        onPress={() => navigation.navigate("CartScreen", { store: "Aldi" })}
      >
        <Text style={styles.buttonText}>Place order from Aldi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red" }]}
        onPress={() => navigation.navigate("CartScreen", { store: "Coles" })}
      >
        <Text style={styles.buttonText}>Place order from Coles</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={() =>
          navigation.navigate("CartScreen", { store: "Woolworths" })
        }
      >
        <Text style={styles.buttonText}>Place order from Woolworths</Text>
      </TouchableOpacity>
      <View style={styles.navigationBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#FF006B",
  },
  storeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productItem: {
    marginBottom: 4,
  },
  totalCost: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  editButton: {
    backgroundColor: "black",
  },
});

export default ComparePriceScreen;
