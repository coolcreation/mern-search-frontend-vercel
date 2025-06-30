### React Native mobile app  
---  

**1. Choose a template to start a project:  https://docs.expo.dev/more/create-expo/#--template**
```
# create a minimal expo project in current directory
npx create-expo-app@latest --template blank ./
```

**2. Choose an environment: https://docs.expo.dev/get-started/set-up-your-environment/**
 - Choose one: `Android`, `iOS`, `Android Emulator`, or `iOS Simulator`  
 - Choose one:  `Expo Go` will allow tests in the browser, or choose `Dev Build`  

**3. Scan QR Code and download mobile device app**  

**4. Start Developing: https://docs.expo.dev/get-started/start-developing/**  

**5. Start a development server**
```
npx expo start
```  
 **6. Might have to install these packages if expo start doesn't work**  
 ```
npx expo install react-dom react-native-web @expo/metro-runtime
 ```  

 **7. Once Expo is running, scan the QR Code in the terminal**  
  - This will allow access to the project via Mobile device  

---  
### Now we can implement the Router  

**Our folder structure should look like this (slightly modified from `blank template`):**
``` 
mobile-app/
├── .expo/                 # local Expo CLI files, cache
├── app/
│   ├── _layout.jsx        # This is the root layout for Expo Router
│   ├── index.jsx
│   ├── aboutPage.jsx
│   ├── contactPage.jsx
│   ├── productPage.jsx
│   └── cartPage.jsx
├── assets/                # images, icons, etc.
├── node_modules/
├── app.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

**8. Install Drawer + React Navigation ecosystem:**

```
npm install @react-navigation/native @react-navigation/drawer
```


**9. Install Gesture Handler + Reanimated (required by navigation/drawer):**

```
npx expo install react-native-gesture-handler react-native-reanimated
```

Add this at the top of `App.js` (Expo handles most cases automatically, so usually no manual config needed anymore):
```
import 'react-native-gesture-handler';
```

---

**10. Install Vector Icons:**
```
npm install react-native-vector-icons
```
---

**11. Install Expo Linear Gradient:**
```
npx expo install expo-linear-gradient
```

**Go here and follow the instructions:**
**https://docs.expo.dev/router/installation/#manual-installation**
```
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```  




