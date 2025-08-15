import { loginSIgnupStyle } from "@/styles/styles";
import { useLocalSearchParams, router } from "expo-router";
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function LoginSignup() {
  const styles = loginSIgnupStyle();
  const { isLogin: isLoginParam } = useLocalSearchParams();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const API_BASE = "http://192.168.0.15:3000"; // your backend URL (use LAN IP for physical device)

  useEffect(() => {
    if (isLoginParam === "false") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }

    authStatus()
  }, [isLoginParam]);

  const loginAction = async () => {
    try {
      const res = await axios.post(`${API_BASE}/auth/login`, {
        email,
        password
      });

      const token = res.data.token;
      await AsyncStorage.setItem("token", token);

      Alert.alert("Success", "Logged in successfully!");
      router.push("/(auth)/homepage"); // navigate to notes screen
    } catch (err) {
      const error = err as any;
      console.error(error);
      Alert.alert("Error", error.response?.data?.error || "Login failed");
    }
  };

  const registerAction = async () => {
    if (password !== confirmPassword) {
      return Alert.alert("Error", "Passwords do not match");
    }
    try {
      const res = await axios.post(`${API_BASE}/auth/register`, {
        username: name,
        email,
        password
      });

      const token = res.data.token;
      await AsyncStorage.setItem("token", token);

      Alert.alert("Success", "Registered successfully!");
      router.push("/(auth)/homepage");
    } catch (err) {
      const error = err as any;
      console.error(error);
      Alert.alert("Error", error.response?.data?.error || "Registration failed");
    }
  };

  const authStatus = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      router.push("/(auth)/homepage");
    }
  };

  return (
    <SafeAreaView style={styles.containor}>
      <ImageBackground
        source={require("@/assets/images/loginBg.jpeg")}
        style={styles.image}
      >
        {/* Dark overlay */}
        <View style={styles.overlay} />

        {/* White curved card */}
        <View style={styles.bottomCard}>
          <Text style={styles.title}>
            {isLogin ? "Welcome back." : "Sign Up For Free."}
          </Text>

          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={isLogin ? loginAction : registerAction}
          >
            <Text style={styles.buttonText}>
              {isLogin ? "Sign in" : "Sign up"}
            </Text>
          </TouchableOpacity>

          {/* Switch link */}
          <Text style={styles.switchText}>
            {isLogin ? "Don’t have an account? " : "Already a member? "}
            <Text
              style={styles.switchLink}
              onPress={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up" : "Sign in"}
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
