import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { styles } from "../../styles/global";
import SHA256 from "crypto-js/sha256";
import { useAuth } from "../../context/AuthContext";

export default function VerifyEmail() {
  const params = useLocalSearchParams();
  const { signIn } = useAuth();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (params.email) {
      setEmail(params.email as string);
    }
    if (params.password) {
      setPassword(params.password as string);
    }
  }, [params.email, params.password]);

  const handleVerify = async () => {
    try {
      const verifyResponse = await fetch(
        "https://blearn-v3-backend.onrender.com/userapi/verifyemail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, verificationCode: code }),
        }
      );

      const verifyData = await verifyResponse.json();

      if (verifyResponse.ok) {
        Alert.alert("Success", "Email verified!");

        // now log in
        const passwordHash = SHA256(password).toString();
        const loginResponse = await fetch(
          "https://blearn-v3-backend.onrender.com/userapi/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, passwordHash }),
          }
        );

        const loginData = await loginResponse.json();

        if (loginResponse.ok) {
          signIn(loginData.accessToken, loginData.refreshToken);
        } else {
          Alert.alert(
            "Error",
            loginData.message || "Login failed after verification"
          );
        }
      } else {
        Alert.alert("Error", verifyData.message || "Email verification failed");
      }
    } catch (error) {
      Alert.alert("Error", "Server not reachable");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your email</Text>
      <Text>We've sent a verification code to your email address.</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        editable={false}
      />

      <TextInput
        placeholder="Verification Code"
        style={styles.input}
        value={code}
        onChangeText={setCode}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleVerify}
      >
        <Text style={styles.buttonText}>Verify and Login</Text>
      </TouchableOpacity>
    </View>
  );
}
