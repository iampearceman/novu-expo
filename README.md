# Novu Expo

Novu Expo is a mobile application built with Expo and `@novu/react-native` package, showcasing the integration of Novu's notification inbox (in-app) within a mobile app.

## Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center" width="33%">
        <img src="https://github.com/user-attachments/assets/1f8c3a08-ac6a-4e02-b8c0-ab835e65116e" alt="Home Screen" width="200"/><br>
        <em>Home Screen / Changelog</em>
      </td>
      <td align="center" width="33%">
        <img src="https://github.com/user-attachments/assets/1cb80422-28ec-4a31-b8d5-acd05bdacf46" alt="Notification Screen" width="200"/><br>
        <em>Updates Screen</em>
      </td>
      <td align="center" width="33%">
        <img src="https://github.com/user-attachments/assets/fa071ff7-19fc-448a-8644-134a425ee95b" alt="Settings Screen" width="200"/><br>
        <em>handleLongPress Screen</em>
      </td>
    </tr>
  </table>
</div>

## Features

- The main tab (`index.tsx`) fetches Novu's Changelog.
- The updates tab (`updates.tsx`) is a fully functional custom mobile notification in-app (inbox) feed.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/novu-expo.git
   ```

2. Navigate to the project directory:
   ```
   cd novu-expo
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

## Running the App

1. Start the Expo development server:
   ```
   npx expo start
   ```

2. Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal or in the browser window that opens.

3. Alternatively, press 'a' in the terminal to run the app on an Android emulator, or 'i' for iOS simulator (if you're using macOS).

## Configuration

To configure the Novu integration, you'll need to set up your Novu Application Identifier and Subscriber ID.  
In this file: `updates.tsx`

```javascript
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <NovuProvider
        subscriberId="<Subscriber ID>"
        applicationIdentifier="<Application ID>"
      >
        <UpdatesList />
      </NovuProvider>
    </SafeAreaView>
  );
```

## Contact

If you have any questions or feedback, please open an issue in this repository.
