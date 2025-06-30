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



---  
### Publish on the App Store or Google Play

**1. Make sure the project is ready for publishing, and handle API keys**

- All code is tested on a **physical device** (via Expo Go or a Dev Build)
- No hard-coded `localhost` APIs — use production URLs
- `app.json` is configured with:

```
{
  "expo": {
    "name": "My App",
    "slug": "my-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "android": {
      "package": "com.yourcompany.myapp"
    },
    "ios": {
      "bundleIdentifier": "com.yourcompany.myapp"
    }
  }
}
```
**Manage secrets (if the app doesn't have secrets skip ahead to step #2)**

If the app needs API keys, put them in **Expo secrets** (never hard-coded).

```
eas secret:create --name API_KEY --value your_key_here
```

Then access in the app with:

```
process.env.API_KEY
```

**2. Install EAS CLI**

Expo uses **EAS (Expo Application Services)** to build app binaries for us in the cloud.

```
npm install -g eas-cli

eas login   # Then log in (use your Expo account credentials)
```

**3. Configure EAS**

```
eas build:configure
```

This generates an `eas.json` file.

It will auto setup defaults for **Android (apk/aab)** and **iOS** 

**4. Instructiomns to build the Android app**

To create an **Android AAB** (needed for Google Play):

```bash
eas build -p android --profile production
```

- Add `--profile preview` if you just want to test before publishing.

- This builds it in the cloud. It will give you a link to download your AAB file.

---

**5. Test the app**

Download the `.aab` or `.apk` and install it on a real Android device using:

```bash
expo install:apk <path-to-apk>
```

**6. Submit to Google Play**

1. Create a **Google Play Developer Account** (\$25 one-time fee).
2. Create a new app in the Google Play Console.
3. Upload your `.aab` file.
4. Fill in store listing, privacy policy, screenshots, etc.
5. Submit for review!








