// app/contactPage.jsx
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { globalStyles, COLORS } from '../styles/globalStyles';

export default function ContactPage() {
  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd]}
      style={{ padding: 5 }}
    >
      <Text style={[globalStyles.pageTitle, { backgroundColor: 'transparent' }]}>
        Contact Us
      </Text>
    </LinearGradient>
  );
}