import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import UpdatesList from "@/components/UpdatesList";
import { NovuProvider } from "@novu/react-native";

export default function UpdatesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <NovuProvider
        applicationIdentifier="zpvQXkfv8vU5"
        subscriberId="68960407fb7f0fb6424854d2"
        backendUrl="https://eu.api.novu.co"
        socketUrl="https://eu.ws.novu.co"
      >
        <UpdatesList />
      </NovuProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
