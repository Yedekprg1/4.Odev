import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import CustomInput from "./CustomInput";

type Props = {
  navigation: any;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Şimdilik sadece konsola yazdır + Home'a git
    console.log("Login values:", { email, password });
    navigation.navigate("Home");
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login Screen</Text>

      <CustomInput
        label="E-posta"
        value={email}
        onChangeText={setEmail}
        placeholder="mail@example.com"
      />

      <CustomInput
        label="Şifre"
        value={password}
        onChangeText={setPassword}
        placeholder="Şifreniz"
        secureTextEntry
      />

      <View style={{ marginTop: 16 }}>
        <Button title="Giriş Yap" onPress={handleLogin} />
      </View>

      <View style={{ marginTop: 8 }}>
        <Button title="Kayıt Ol" onPress={goToRegister} />
      </View>
    </View>
  );
};

export default LoginScreen;
