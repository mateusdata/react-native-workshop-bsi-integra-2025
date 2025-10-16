import AntDesign from "@expo/vector-icons/AntDesign"
import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador Interativo</Text>
      <Text style={styles.number}>{count}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttons} onPress={() => setCount(count + 1)}>
          <AntDesign name="plus" size={28} color="#364fddff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={() => setCount(count - 1)}>
          <AntDesign name="minus" size={28} color="#364fddff" />
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  number: { fontSize: 48, marginBottom: 20 },
  buttons: { flexDirection: "row", gap: 10 },

})