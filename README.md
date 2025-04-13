# 🔐 React Native Auth + Native Bridge

<p align="center">
  <img src="https://img.shields.io/badge/React_Native-0.76-blue" alt="React Native"/>
  <img src="https://img.shields.io/badge/Kotlin-1.8-green" alt="Kotlin"/>
  <img src="https://img.shields.io/badge/Swift-5.0-orange" alt="Swift"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="License"/>
</p>

A demonstration app featuring authentication flows, native module communication, and geolocation services.

## 🌟 Features

- **Secure authentication** with public/private routing
- **Bidirectional communication** between JavaScript and native code
- **Geolocation** with permission handling
- **Clean architecture** with proper separation of concerns

## 🚀 Quick Start

### Prerequisites

- Node.js (v16+)
- Yarn or npm
- Java Development Kit (JDK 17+)
- Android Studio / Xcode

### Installation

# Clone the repository
git clone https://github.com/Edo199409/react-native-auth-native-bridge.git

# Navigate to project directory
cd react-native-auth-native-bridge

# Install dependencies
yarn install



Running the App

Android
# Clean build
cd android && ./gradlew clean && cd ..

# Run Android app
yarn android
# or
npx react-native run-android


iOS
# Install pods
cd ios && pod install && cd ..


# Run iOS app
yarn ios
# or
npx react-native run-ios



Project Structure
src/
├── assets/ # Images, fonts, etc.
├── context/ # Authentication context
├── native/ # Native module bridges
├── navigation/ # App routing
├── screens/ # Application screens
│ ├── login/ # Authentication
│ ├── message/ # Native communication
│ └── location/ # Geolocation
└── utils/ # Helpers and utilities




📱 Feature Details
🔑 Authentication Flow
Simple email-based login (no validation)

Protected routes for authenticated users

Secure token storage

Logout functionality

📨 Native Communication
Messaging Screen:

Send messages to native code (Kotlin/Swift)

Receive responses back in JavaScript

Android: CustomModule.kt

iOS: CustomModule.swift

🗺 Geolocation
Get current coordinates

Handle permission requests

Error handling for denied permissions

Uses react-native-geolocation-service




Native Modules Setup

Android (Kotlin)
Module: android/app/src/main/java/com/authnativebridge/CustomModule.kt
Registration: MainApplication.kt → getPackages()

iOS (Swift)
Module: ios/CustomModule.swift
