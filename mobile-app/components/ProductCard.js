// frontend/mobile/components/ProductCard.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Picker, Button } from 'react-native';

export default function ProductCard({ product, handleProductAdded }) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const variants = product.variants || [];
  const variant = variants[selectedVariantIndex] || {};

  const displayPrice = variant.price ?? product.price ?? 0;
  const displayStock = variant.stock ?? product.stock ?? 0;
  const displayImage =
    (variant.imageURL && variant.imageURL[0]) ||
    (product.imageURL && product.imageURL[0]) ||
    null;

  const handleAdd = () => {
    const id = `${product.objectID || product._id}-${variant.sku || variant.id}`;
    handleProductAdded(id);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{product.baseName}</Text>
      <Text>{product.description}</Text>
      <Text>Brand: {product.brand}</Text>
      <Text>Categories: {Array.isArray(product.categories) ? product.categories.join(', ') : product.categories}</Text>

      <Picker
        selectedValue={selectedVariantIndex}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedVariantIndex(itemValue)}
      >
        {variants.map((v, i) => (
          <Picker.Item key={v.sku || i} label={v.name} value={i} />
        ))}
      </Picker>

      <Text style={styles.price}>${displayPrice.toFixed(2)}</Text>
      <Text>Stock: {displayStock}</Text>

      {displayImage?.url ? (
        <Image
          source={{ uri: displayImage.url }}
          style={styles.image}
          resizeMode="contain"
        />
      ) : (
        <Text>No image available</Text>
      )}

      <Button title="Add to Cart" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    width: '90%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginVertical: 6,
  },
  image: {
    width: '100%',
    height: 180,
    marginVertical: 10,
  },
});
