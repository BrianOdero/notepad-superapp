import { onboardingStyle } from "@/styles/styles";
import { router } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

export default function Index() {
  const styles = onboardingStyle();

  const routeToLogin = () => {
    router.push({ pathname: "/loginSignup", params: { isLogin: "true" } });
    handleCompleteOnboarding();
  };

  const routeToRegister = () => {
    router.push({ pathname: "/loginSignup", params: { isLogin: "false" } });
    handleCompleteOnboarding();
  };

  const handleCompleteOnboarding = async () => {
    try {
      await AsyncStorage.setItem("onboardingComplete", "true");
      console.log("Onboarding successfully completed.");
    } catch (error) {
      console.error("Error saving onboarding complete:", error);
    }
  };

  const confirmOnboardingComplete = async () => {
    const isOnboardingComplete = await AsyncStorage.getItem("onboardingComplete");
    if (isOnboardingComplete === "true") {
      router.push("/loginSignup");
    }
  };

  useEffect(() => {
    confirmOnboardingComplete()
  }, [])
  

  return (
    <SafeAreaView style={styles.containor}>
      <ImageBackground
        source={require("@/assets/images/loginBg.jpeg")}
        style={styles.image}
      >
        {/* Dark overlay */}
        <View style={styles.overlay} />

        <View style={styles.contentSection}>
          <Text style={styles.title}>Welcome to AI Notepad.</Text>
          <Text style={styles.subtitle}>
            Your smart companion for jotting down ideas, organizing notes, and
            turning inspiration into action — all powered by AI.
          </Text>

          <TouchableOpacity style={styles.button} onPress={routeToLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={routeToRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
