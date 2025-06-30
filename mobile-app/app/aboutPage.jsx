// app/AboutPage.jsx
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { globalStyles, COLORS } from '../styles/globalStyles';

export default function AboutPage() {
  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd]}
      style={{ padding: 5 }}
    >
      <Text style={[globalStyles.pageTitle, { backgroundColor: 'transparent' }]}>
        About Us
      </Text>
    </LinearGradient>
  );
}