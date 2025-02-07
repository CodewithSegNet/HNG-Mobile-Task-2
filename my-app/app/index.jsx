import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { encryptData, decryptData } from "../utils/cryptoUtils";


export default function App() {
  const [text, setText] = useState("");
  const [encrypted, setEncrypted] = useState("");
  const [decrypted, setDecrypted] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encryption & Decryption</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Text"
        onChangeText={setText}
        value={text}
      />

      <Button title="Encrypt" onPress={() => setEncrypted(encryptData(text))} />
      {encrypted ? <Text style={styles.result}>Encrypted: {encrypted}</Text> : null}

      <Button title="Decrypt" onPress={() => setDecrypted(decryptData(encrypted))} />
      {decrypted ? <Text style={styles.result}>Decrypted: {decrypted}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  result: { marginTop: 10, fontSize: 16, fontWeight: "bold" },
});
