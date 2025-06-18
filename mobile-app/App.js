import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL;

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!API_BASE_URL) {
          throw new Error("API_BASE_URL is not defined. Check your .env file.");
        }
        const productsEndpoint = `${API_BASE_URL}/products`;
        console.log(`Fetching products from: ${productsEndpoint}`); 
        const response = await axios.get(productsEndpoint);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err.message);
        setError("Failed to load products. " + err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading products...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Products</Text>
      <FlatList
        data={products}
        // keyExtractor={(item) => item._id.$oid} // Use the _id.$oid for unique key

        keyExtractor={(item, index) => {
          // Prioritize _id.$oid if available (MongoDB object ID in serialized format)
          if (item._id && typeof item._id === 'object' && item._id.$oid) {
            return item._id.$oid;
          }
          // Fallback to _id directly if it's a string (MongoDB ID as a plain string)
          if (item._id && typeof item._id === 'string') {
            return item._id;
          }
          // If no suitable ID is found, use the index as a last resort.
          // (Generally discouraged if list items reorder, but safe for static fetches)
          return index.toString();
        }}

        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.baseName}</Text>
            <Text>{item.description}</Text>
            <Text>Brand: {item.brand}</Text>
            {item.variants && item.variants.length > 0 && (
              <Text>Price from: ${item.variants[0].price.toFixed(2)}</Text>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50, // Add some padding for better visibility on devices
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productItem: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '90%', // Adjust width as needed
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});