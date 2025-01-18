import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  
} from "react-native";

function KidsZooLogin(): JSX.Element {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{
          uri: "https://i.ibb.co/3sSJfDk/kidszoo-logo.png",
        }}
        style={styles.logo}
      />
      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#BFBFBF"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#BFBFBF"
        secureTextEntry
      />
      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      {/* GO Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GO</Text>
      </TouchableOpacity>
      {/* Sign Up */}
      <View style={styles.signupWrapper}>
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}> Sign up</Text>
        </TouchableOpacity>
      </View>
      {/* Bottom Illustration */}
      <Image
        source={{
          uri: "https://i.ibb.co/Jj3RVSp/dragon-kids.png",
        }}
        style={styles.illustration}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F2ED",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 140,
    height: 50,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 25,
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  forgotText: {
    alignSelf: "flex-end",
    color: "#FF7A00",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "#FF7A00",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  signupText: {
    color: "#555",
    fontSize: 14,
  },
  signupLink: {
    color: "#FF7A00",
    fontSize: 14,
    fontWeight: "600",
  },
  illustration: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default KidsZooLogin;
