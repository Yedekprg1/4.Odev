import React from "react";
import { Text, TextInput, View } from "react-native";

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
};

const CustomInput: React.FC<Props> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={{ width: "80%", marginBottom: 12 }}>
      <Text style={{ marginBottom: 4 }}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}  // ⚠️ BURASI ÖNEMLİ
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 4,
          paddingHorizontal: 8,
          paddingVertical: 6,
        }}
      />
    </View>
  );
};

export default CustomInput;
