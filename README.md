# 🔐 React Native Auth + Native Bridge

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0.76-blue" alt="React Native"/>
  <img src="https://img.shields.io/badge/Kotlin-1.8-green" alt="Kotlin"/>
  <img src="https://img.shields.io/badge/Swift-5.0-orange" alt="Swift"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="License"/>
</p>

A demo app featuring authentication, geolocation, and native communication between JavaScript and native code (Kotlin & Swift).

# 🌟 Features
- 🔐 Email-based login flow (no password validation)
- 🔄 JS ↔️ Native communication via custom modules
- 📍 Geolocation with permission handling
- 🧱 Clean project structure with modular organization

# 🚀 Quick Start

✅ Prerequisites:
- Node.js `v16+`
- Yarn or npm
- JDK `17+`
- Android Studio / Xcode (for iOS)

📦 Installation:
```bash
git clone https://github.com/Edo199409/react-native-auth-native-bridge.git
cd react-native-auth-native-bridge
yarn install
```

▶️ Running the App:

**Android:**
```bash
cd android && ./gradlew clean && cd ..
yarn android
# or
npx react-native run-android
```

**iOS:**
```bash
cd ios && pod install && cd ..
yarn ios
# or
npx react-native run-ios
```

📁 Project Structure:
```
src/
├── assets/         # Icons, images, etc.
├── context/        # Auth context logic
├── native/         # JS bridges to native modules
├── navigation/     # React Navigation setup
├── screens/        # App screens
│   ├── login/         # Login screen
│   ├── message/       # Native module interaction
│   └── location/      # Geolocation logic
└── utils/          # Reusable utilities
```

🔑 Authentication:
- Simple email-based login (no validation)
- Protected screens via auth context
- Logout functionality

📨 Native Communication:
- Send string from JS to native
- Receive response back (Kotlin & Swift)
- Android: `CustomModule.kt`
- iOS: `CustomModule.swift`

🗺 Geolocation:
- Request location permission
- Get current user coordinates
- Handle permission denied state
- Library: `react-native-geolocation-service`

🛠 Native Modules Setup:

**Android (Kotlin):**
- `android/app/src/main/java/com/authnativebridge/CustomModule.kt`
- Registered in `MainApplication.kt → getPackages()`

**iOS (Swift):**
- `ios/CustomModule.swift`
- Bridged using `CustomModuleBridge.m`
- Bridging header: `ios/AuthNativeBridge/AuthNativeBridge-Bridging-Header.h`
