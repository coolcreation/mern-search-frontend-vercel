// app/cartPage.jsx
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { globalStyles, COLORS } from '../styles/globalStyles';

export default function CartPage() {
  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd]}
      style={{ padding: 5 }}
    >
      <Text style={[globalStyles.pageTitle, { backgroundColor: 'transparent' }]}>
        Your Cart
      </Text>
    </LinearGradient>
  );
}