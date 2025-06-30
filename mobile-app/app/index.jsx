// app/index.jsx is the entry point of our App
// upload 'ES7+ React/Redux/React-Native snippets' extension for VS Code
// expo router expects page components to be inside 'app' folder
// rnfes then tab will build this component for us:

import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles, COLORS } from '../styles/globalStyles';

export default function HomePage() {
  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd]}
      style={{ padding: 5 }}
    >
      <Text style={[globalStyles.pageTitle, { backgroundColor: 'transparent' }]}>
        Home Page
      </Text>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(226, 226, 226)',
  },
  redText: {
    color: 'red',
    fontSize: 20,
  },
});






