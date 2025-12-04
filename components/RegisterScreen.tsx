import React, { useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import CustomInput from "./CustomInput";

type Props = {
  navigation: any;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleRegister = () => {
    console.log("password:", password);
    console.log("passwordAgain:", passwordAgain);

    if (password !== passwordAgain) {
      Alert.alert("Hata", "Şifreler uyuşmuyor!");
      return;
    }

    console.log("Kayıt başarılı:", { email, password });
    Alert.alert("Başarılı", "Kayıt işlemi tamamlandı!");
    // navigation.navigate("Login");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Register Screen</Text>

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
        secureTextEntry
        placeholder="Şifre"
      />

      <CustomInput
        label="Şifre Tekrar"
        value={passwordAgain}
        onChangeText={setPasswordAgain}
        secureTextEntry
        placeholder="Şifre (tekrar)"
      />

      <View style={{ marginTop: 16 }}>
        <Button title="Kayıt Ol" onPress={handleRegister} />
      </View>
    </View>
  );
};

export default RegisterScreen;
