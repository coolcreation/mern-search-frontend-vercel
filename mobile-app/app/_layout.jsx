// app/_layout.jsx
import { Tabs } from 'expo-router';       // Uses file-based navigation
import { Image, TouchableOpacity } from 'react-native'; // Native views
import { useRouter } from 'expo-router';  // Helps navigate programmatically
import { Ionicons } from '@expo/vector-icons';  // cart icon


export default function Layout() {
  const router = useRouter();  // Initialize navigation

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f8f9fa', 
          height: 100,          
        },
        headerTitle: '',     
        headerTitleAlign: 'left',   
        tabBarActiveTintColor: '#007bff',

        //Show logo on top-left
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.push('/')}>
          <Image
            source={require('../assets/ecommerce-logo-tranparent-bg.png')}
            style={{ width: 60, height: 60, marginLeft: 15, resizeMode: 'contain' }}
          />
          </TouchableOpacity>
        ),

        // Cart icon on top-right
        headerRight: () => (
          <TouchableOpacity onPress={() => router.push('/cartPage')}>
            <Ionicons name="cart" size={33} color="#007bff" style={{ marginRight: 15 }} />
          </TouchableOpacity>
        ),

        // 7️⃣ General styling
        tabBarActiveTintColor: '#007bff',
      }}
    >
      <Tabs.Screen name="contactPage" options={{ title: 'Contact' }} />
      <Tabs.Screen name="aboutPage" options={{ title: 'About' }} />
      <Tabs.Screen name="productPage" options={{ title: 'Products' }} /> 

      {/* Hide these pages from showing as tabs */}
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="cartPage" options={{ href: null }} />
    </Tabs>
  );
}
